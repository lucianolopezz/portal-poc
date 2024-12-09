import type { ComponentConfig } from "@measured/puck";

export type TextProps = {
  align: "left" | "center" | "right";
  text?: string;
  padding?: string;
  size?: "s" | "m";
  color: string;
  maxWidth?: string;
};

export const Text: ComponentConfig<TextProps> = {
  fields: {
    color: {
      type: "custom",
      label: "Color",
      render: ({ onChange, value,  }) => (
        <div className="flex gap-2">
          <label htmlFor="head">Color</label>
          <input type="color" id="head" name="head" value={value} onChange={e => onChange(e.target.value)} />
        </div>
      )
    },
    text: { type: "textarea" },
    size: {
      type: "select",
      options: [
        { label: "S", value: "s" },
        { label: "M", value: "m" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    padding: { type: "text" },
    maxWidth: { type: "text" },
  },
  defaultProps: {
    align: "left",
    text: "Text",
    padding: "24px",
    size: "m",
    color: "",
  },
  render: ({ align, color, text, size }) => {
    return (
      <div>
        <span
          style={{
            color,
            display: "flex",
            textAlign: align,
            width: "100%",
            fontSize: size === "m" ? "20px" : "16px",
            fontWeight: 300,
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent:
              align === "center"
                ? "center"
                : align === "right"
                ? "flex-end"
                : "flex-start",
          }}
        >
          {text}
        </span>
      </div>
    );
  },
};