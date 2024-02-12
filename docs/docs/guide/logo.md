---
hide_table_of_contents: true
---

# Logo

## Customizing the Logo

Customizing the logo in the template to reflect your brand identity is a straightforward process. The logo component can be found at `src/components/layout/shared/Logo.tsx`. To update the logo, follow these steps:

1. **Locate the Logo component:** Navigate to the `src/components/layout/shared/Logo.tsx`. file in your project directory.

2. **Prepare your Logo:** Have your new logo image ready, preferably in SVG format for scalability and performance. If it’s not in SVG format, ensure it's in a web-friendly format like PNG or JPG.

3. **Update the Logo Component:** In the `Logo` component, replace the existing SVG with your new logo.

   ```tsx
   // Replace this SVG with your new logo
   <svg ...>
    ...
   </svg>
   ```

   Or if you are using an image, replace the existing SVG with your new logo.

4. **Customize Logo Text:** If your logo includes text, you can customize the text by updating the `templateName` in `src/configs/themeConfig.ts` or just update the `LogoText` value like so:

    ```tsx
    <LogoText
      ...
    >
      Your Company Name
    </LogoText>
    ```

You can modify the logo by making changes to the svg and text elements. Alternatively, you can use an image as the logo. To achieve this, you would need to replace the svg and text elements with an `img` element. You may create various combinations of logo but the most common ones are:

- SVG Only
- Image Only
- Text Only
- SVG + Text
- Image + Text
