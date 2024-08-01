# Adding a new language

This guide provides the steps to add a new language to your project.

### Step 1: Add the locale file

Create a JSON file for the new language in the `src/data/dictionaries` folder. For example, for German, create `de.json` file. Add the language data as shown below:

```json title="src/data/dictionaries/de.json"
{
  "navigation": {
    "home": "Heim",
    "about": "Zirka"
  }
}
```

### Step 2: Update the configuration

Modify the `src/configs/i18n.ts` file to include the new language in the `locales` array. Also, add the language direction in the `langDirection` object.

```tsx title="src/configs/i18n.ts"
export const i18n = {
  locales: ['en', 'de'], // Add 'de' for German
  langDirection: {
    en: 'ltr',
    de: 'ltr' // Add direction for German
  }
} as const
```

### Step 3: Add imports and redirects

- In the `src/utils/getDictionary.ts` file, import and add the new locale data:

  ```tsx title="src/utils/getDictionary.ts"
  const dictionaries = {
    en: () => import('@/data/dictionaries/en.json').then(module => module.default),
    de: () => import('@/data/dictionaries/de.json').then(module => module.default) // Add German import
  }
  ```

- Update the redirects in `next.config.mjs`:

  ```js title="next.config.mjs"
  redirects: async () => {
    return [
      {
        source: '/:lang(en|de)',
        destination: '/:lang/dashboards/crm',
        permanent: false
      },
      {
        source: '/((?!(?:en|de)\\b)):path',
        destination: '/en/:path',
        permanent: false
      }
    ]
  }
  ```

### Step 4: Clear browser cache

After completing the above steps, delete the `.next` folder before running your project again. You may also need to clear the browser cache to see the changes. Refer to [this](/docs/faqs/how-to-clear-browser-cache) guide for more information. Alternatively, test the changes in your browser's Guest Mode.

That's it! You have successfully added a new language to your project.
