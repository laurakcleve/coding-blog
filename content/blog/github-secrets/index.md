---
title: 'Using Secrets in Github actions'
date: '2023-02-03'
description: 'So your CI tests can access your environment variables'
---

When running tests as part of your CI, you're going to need to be able to hit your database if you have one. In my case I'm using Playwright on a Next.js site, so there are two steps: defining the variable in Github, and setting up the workflow to use it.

In Github (you have to be the repository owner), go to the settings of your repo, click the Secrets tab, then add a New repository secret. This is similar to adding environment variables to your site if you're deploying from Netlify or Vercel.

![Github settings](images/github.png)

Here's a link to the <a href="https://docs.github.com/en/actions/security-guides/encrypted-secrets" target="_blank" rel="noopener noreferrer">Github docs</a>.

To use the secret in the actions workflow, I added this code to the root level of `playwright.yml` (you would substitute your secret variable name for `DATABASE_URL`):

```yml
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

And that's all you need! It's a very quick and easy setup.
