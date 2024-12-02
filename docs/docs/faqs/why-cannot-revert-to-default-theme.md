---
hide_table_of_contents: true
---

# Why Can't Revert to Default Theme

:::caution Important
In the current version of our template, we have migrated to Material-UI (MUI) version 6. As part of this update, we now use the `createTheme` function for theme customization. If you are using the latest version of the template, you can skip this FAQ as it is not relevant to your setup.
:::

In our template configurations, we have migrated to using MUI's `extendTheme` function. The `extendTheme` function is deeply integrated into the template's design and architecture. This integration provides enhanced capabilities for theme customization.

However, this integration also means that the theme `createTheme` is not available as a separate theme object. This means that you cannot revert to the `createTheme`.
