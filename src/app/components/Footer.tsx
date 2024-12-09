import type { ComponentConfig } from "@measured/puck";

export type FooterProps = {
};

export const Footer: ComponentConfig<FooterProps> = {
  fields: {
  },
  defaultProps: {
  },
  render: ({ puck: { renderDropZone } }) => {
    return (
      <div className="flex items-center justify-between bg-blue-400 h-16">
        <span>Footer 1</span>
        <span className="w-10 h-10 bg-green-300">{renderDropZone({ zone: "footer-1" })}</span>
        <span className="w-10 h-10 bg-green-300">{renderDropZone({ zone: "footer-2" })}</span>
        <span>Footer 4</span>
      </div>
    );
  },
};