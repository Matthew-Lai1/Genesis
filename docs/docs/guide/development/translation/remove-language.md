---
hide_table_of_contents: true
---

# Removing a language

This guide provides steps to remove a language from your project.

### Step 1: Remove the locale file

Navigate to the `src/data/dictionaries` folder and delete the JSON file of the language you want to remove.

### Step 2: Update Configuration

In the `src/configs/i18n.ts` file, remove the language from the `locales` array and delete its entry from the `langDirection` object.

### Step 3: Additional Modifications

- In the `src/utils/getDictionary.ts` file, remove the import statement for the language you are removing.

- In `next.config.mjs`, update the redirects to exclude the removed language.

### Step 4: Clear browser cache

After completing the above steps, delete the `.next` folder before running your project again. You may also need to clear the browser cache to see the changes. Refer to [this](/docs/faqs/how-to-clear-browser-cache) guide for more information. Alternatively, test the changes in your browser's Guest Mode.

By following these steps, you have successfully removed a language from your project.
