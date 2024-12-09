import type { ComponentConfig } from "@measured/puck";

export type BoxProp = {
  align: "left" | "center" | "right";
};

export const Box: ComponentConfig<BoxProp> = {
  fields: {
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  },
  defaultProps: {
    align: "left",
  },
  render: ({ puck: { renderDropZone } }) => {
    return (
      <div className="flex justify-center items-center">
        {renderDropZone({ zone: "my-content" })}
      </div>
    );
  },
};