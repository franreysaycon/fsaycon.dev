---
title: 'CRA: Experiences and Pains'
date: '2021-05-25'
duration: '10 minutes'
tags: 'Frontend Development, React, Javascript, create-react-app'
description: "In this blog, I share my experiences and pains when working with create-react-app or CRA."
---

I'm sure this is one of the most common and often the goto introduction paradigm when it comes to starting or coding with React. (at least in my experience).  Let me share with you my experiences and pains working with production applications with Create-React-App (CRA).

If you want to quickstart your React project with only vanilla React, create-react-app is the way to go. In one easy command, it produces a JS ecosystem with handy tools like eslint and prettier rules, webpack, and many more. It abstracts the user away from setting up everything from scratch and enables the user to just start coding a client-side application. You don't need to worry about importing CSS, SCSS, or LESS files for your styles and images as well of which doing this would prompt you to edit your webpack configuration normally to support this. You may also eject such configuration to introduce your preferences such as inserting tailwind.css which is not supported by default. Now ain't that neat?

---

# The Experiences

If my application makes sense to be a purely client-side application especially if everything is behind a login anyway, I would probably choose CRA. It's my major go-to for proof of concepts, tech talk demos, and those dreaded take-home exams for interviews. It's quick and abstracted and all I have to worry about is just React and whatever I want to be mixed with it. Not to mention, if you look at the public folder, it already provides the index.html where your React application will be inserted as well as some handy metadata with manifests, favicon, and comments to guide you on what to edit in index.html. It's not opinionated in terms of JS solutions you want to combine with React. Typescript is easily adapted as well!

A pure client-side solution can mean many things for your application. The user will only receive a nearly empty index.html (by default) at first and only when the browser downloaded the script where React resides, only then when your actual application will be seen and interactable. This can impact your SEO as initially, crawlers won't be able to see your site! But according to some articles, Google crawlers try their best to render your application's javascript but if you want to make these robots' lives easier, this shouldn't be your chosen solution. This is the client-side rendering (CSR)  in the world of frontend delivery! It is best described below.

!["CSR Lifecycle"](/create-react-app-experiences-and-pains/1.png)

This may impact your UX in ways that the user will see content later than usual since the first paint is just a blank page. If not careful, we might cause a sudden paint of visible content which is just a downright bad experience. Not to mention, this will heavily affect the users with less than ideal internet and/or uses mobile data. You can see this effect for yourself! Try and run chrome developer tools and choose a network of fast 3G or slow 3G. 

But! There's a way around this pure CSR route. You can create a server-side rendered (SSR) solution using node backend frameworks like Express serving your react app project where the strategy would be is to generate the first state view of your main application using the handy 'renderToString' function of the ReactDOM module. This way we could generate the HTML page on request so when it reaches a user, an initial view can be seen immediately. Only when the javascript is downloaded where React will hydrate itself and make the whole application interactable. This might not be as straightforward as it seems as you also need to worry about stylesheets, meta information through React Helmet among other concerns since you will be doing this from scratch. This is summarized below.

!["SSR Lifecycle"](/create-react-app-experiences-and-pains/2.png)

Another thing I like about this paradigm is that routing is very straightforward with react-router-dom which is highly recommended as your goto router solution. The main app contains (ideally) all the next-level routes your application will contain. This makes it much simpler to deploy behind reverse proxies as well. Not to mention, you can easily configure the root route of CRA using the env variable of PUBLIC_URL. This is handy if you have an existing website and only want a specific route to host the React website, but this is another architecture problem entirely.  An example code is shown below highlighting the homepage, about page and the contact page.

```js
<BrowserRouter>
  <Switch>
    <Route path="/contact">
      <ContactPage />
    </Route>
    <Route path="/about">
      <AboutPage />
    </Route>
    <Route path="/">
      <Homepage />
    </Route>
  </Switch>
</BrowserRouter>
```

Being a pure static solution, this integrates well with Netlify and other SSG cloud providers such AWS S3 behind a configured Cloudfront service. If you prefer to use open-source web services like NGINX, all the configuration needs is a direct point to the CRA's build index.html. JAMStack ftw. \m/

!["Deployment Solutions for CRA"](/create-react-app-experiences-and-pains/3.png)

**TLDR; use CRA if you want to:**
- Quickstart your React project with a built-in and working JS ecosystem.
- Build a purely static application easily incorporated into a JAMStack architecture.
- Use an unopinionated paradigm where you can mix and match freely.
- Be as close to vanilla React as much as possible.

---

# The Pains

CRA's ecosystem is highly unopinionated. Since we are different developers, we can't help but have our own signatures on how we would design our application as well as how our code will be organized. The lack of standards can be a bad thing for a workplace with high rates of context switching across numerous projects. I felt this consequence in my experience in a firm. 

To remedy this, we had to agree as a team to follow one specific standard (e.g. folder structure, CSS in JS) as well as the introduction of strict linter rules which enforce style as well as check syntax errors. Of course, you can't enforce this as much as you want to but these automated practices in place will at least make things more predictable. 

Another pain in CRA is the fact that it's easy, especially in junior hands, to create big javascript bundles. You have to explicitly define a way to do code splitting or else your application at scale will be hard to download even more so in slow data speeds common in mobile! This will affect your first contentful paint, the actual time users see something. 

There are two different ways you could do code-splitting with React. 
- Await Imports (only use this for non-component code as this is unrenderable)
- React.lazy with Suspense (use this for components and adding fallbacks to show a page is loading)

```js
// await imports
const library = await import("./library")

// React.lazy and Suspense
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const Component = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```

It's newbie-friendly when it comes to introducing React but a nightmare when you have near to blank knowledge on how to architect a React application. There are many decisions you need to do with React as it is not a complete solution especially at scale. Routing, client and server state management, style systems, and many more might overwhelm and induce overthinking which may result in overhead in management. This task is recommended to be given to experienced React engineers to at least break ground which juniors can follow else we might end up with spaghetti that no one wants to touch.

Last but not least, it's a pure client-side rendered solution. lol. 

**TLDR; don't use CRA if you want to**
- Create a server-side solution easily
- Use an opinionated framework with less variability and more straightforwardness of how to do things.
- Have bundle optimizations supported out of the box

---

Hope you gained some new insights! I have created a proof of concept of using express to serve SSR to your CRA application. Click [here](https://github.com/franreysaycon/POC-ReactSSRwithExpress), to see it. The other alternatives to watch out for are NextJS and GatsbyJS. 