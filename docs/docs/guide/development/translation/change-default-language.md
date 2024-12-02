# Change default language

This guide provides steps to change the default language in your project. If you need to add a new language, please refer to [this](/docs/guide/development/translation/add-language.md) guide.

### Step 1: Update defaultLocale

Modify the `defaultLocale` in the `src/configs/i18n.ts` file to set your desired default language. For example, to change the default language to German (`de`):

```tsx title="src/configs/i18n.ts"
export const i18n = {
  defaultLocale: 'de', // Set German as the default language
  locales: ['en', 'de'],
  langDirection: {
    en: 'ltr',
    de: 'ltr'
  }
} as const
```

### Step 2: Update redirects

Adjust the redirects in the `next.config.mjs` file to ensure the new default language is correctly routed. Here's an example of how to change the redirects for German as the default language:

```js title="next.config.mjs"
redirects: async () => {
  return [
    {
      source: '/',
      destination: '/de/dashboards/crm',
      permanent: false
    },
    {
      source: '/:lang(en|de)',
      destination: '/:lang/dashboards/crm',
      permanent: false
    },
    {
      source: '/((?!(?:en|de)\\b)):path',
      destination: '/de/:path',
      permanent: true,
      locale: false
    }
  ]
}
```

### Step 3: Clear browser cache

After completing the above steps, delete the `.next` folder before running your project again. You may also need to clear the browser cache to see the changes. Refer to [this](/docs/faqs/how-to-clear-browser-cache) guide for more information. Alternatively, test the changes in your browser's Guest Mode.

By following these steps, you have successfully changed the default language of your project. Ensure to test thoroughly to verify that all routes and translations are working as expected.
