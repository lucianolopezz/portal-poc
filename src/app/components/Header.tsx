import type { ComponentConfig } from "@measured/puck";

export type HeaderProps = {
  title: string
};

export const Header: ComponentConfig<HeaderProps> = {
  fields: {
    title: { type: 'text', label: 'Titulo' },
  },
  defaultProps: {
    title: 'Titulo da noticia aqui'
  },
  render: () => {
    return (
      <div className="flex items-center justify-between bg-red-400 h-16">
        <span>Link 1</span>
        <span>Link 2</span>
        <span>Link 3</span>
        <span>Link 4</span>
      </div>
    );
  },
};