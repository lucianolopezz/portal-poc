import type { ComponentConfig } from "@measured/puck";

export type NewsProps = {
  title: string
};

export const News: ComponentConfig<NewsProps> = {
  fields: {
    title: { type: 'text', label: 'Titulo' },
  },
  defaultProps: {
    title: 'Titulo da noticia aqui'
  },
  render: ({ title }) => {
    return (
      <div className="bg-gray-200 rounded-lg">
        <img className="w-full" src="https://placehold.co/200x100" alt="Title" />
        <div className="p-4">
          <h1 className="mt-2 text-center text-xl">{title}</h1>
        </div>
      </div>
    );
  },
};