---
title: 'Practices To Consider In A React Project'
date: '2021-02-27'
duration: '15 minutes'
tags: 'React, Frontend Development, Best Practices'
description: 'This is my take on practices I would follow when starting a React project or improving an existing one.'
---

This article is my take on practices I would follow when starting a React project or improving an existing one. Just a warning, they will be a LOT of personal anecdotes and rhymes to explain why a piece is needed. Without further ado, let's start!

# Want to avoid torture? Give proper thought to your project structure!

I believe this is the first step for everything. Whatever came up from the user requirements, the developer responsible for starting the project should consider various factors before constructing the overall structure.

Some of these factors include exploring a monorepo solution to centralize your project's codebase into one or the other side of the coin, multi-repo to enable isolation during collaboration. There are many variations of these structures, and I won't be going through each one. All I have to say is, whatever you choose, you must pick the one with the fewest headaches rather than fearing future complexity.

I would choose a monorepo solution if there are many shared packages among your modules, avoid the push and pull overhead, and heighten developer experience when working across modules. The downsides for picking this would mean a polluted git history if not careful, overhead on learning technologies such as lerna and yarn workspaces, and possible complicated scripts to make everything work. There are no perfect solutions, only hardships you are willing to endure. (#deep)

Another would be, is how you would organize your files. I would personally follow component grouping or "thinking in components" when dealing with React. So what the heck does that mean?

In React, it is recommended that we group functionality into components rather than follow separation of files with different formats. In the "old ways", we see that javascript, HTML, and CSS are in different files and grouped in their respective folders. Whatever side you are on, this can be problematic as developer experience gets hampered when you need to check ten files just to create a form. You also need to open at least three files to know the whole context. The component way destroys these worries.

Instead of thinking in formats, you think in components. A button component contains its style (highly recommend to do CSS in JS), functionality (the javascript code), and structure ( HTML conveniently described using JSX). With this, we enforce brand consistency and more importantly, we have a handy reusable, style-independent, and functional ( if you did it right ) component you can use anywhere in your application.

!["Non-component way vs component way"](/practices-to-consider-in-a-react-project/1.png)

Lastly, we explore the bane of a developer's existence, the folder structure. I don't know why this causes a lot of headaches and debates on the internet. I, on the other hand, follow five simple rules.

- Practice colocation
- Common components or components reused all the time, should have their dedicated folder.
- Separate components from lib code (hooks, API, helper functions).
- As much as possible, limit overly deep nesting.
- Follow the paradigm of whatever framework you are using.

[Colocation](https://kentcdodds.com/blog/colocation) is a practice where everything that makes sense to be together is together. Types if you're using typescript, CSS, storybook script, and others involving a component are in one place. I love this since the tests and styles involved (if I decided to use CSS) are in the folder of the component I need to change. It makes onboarding easier and paves the way to a road of self-documentation and better maintainability. The fifth rule won't be applicable if you're not using any framework in the first place. In NextJS, I follow the separation between page components and actual components in addition to what I have described above.

---

# Want to stay tidy? Enforce standards willingly.

Different developers have their signatures on writing logic. As mathematicians say, there are many ways of dressing a chicken. This fact isn't necessarily a bad thing. The best thing about humanity is our individuality. We cover more blind spots as we have more eyes on the job!

I can't deny, there are better solutions but most of the time, especially if you're not dealing with algorithms, it's just a matter of opinions. What I would suggest is to care about avoiding well-known bad practices in your current context like using hoisted vars in javascript as well as, in the risk of becoming labeled overly conscious, consistency in your code style, (two spaces vs four spaces). These standards should be enforced through the use of static analysis, specifically linting.

[Eslint](https://eslint.org/) is your hero for this specific problem. It enables you to choose a popular style guide such as Airbnb and Google or use the default standard. It allows you to automatically fix formatting issues and notified about bad practices. I highly suggest running this on pre-commits (like using husky) or in every pull-request or merge request. It's also configurable to an extent to better suit the needs of the project's context. Pair this with a code auto-formatter like [Prettier](https://prettier.io/) or any IDE integration to make the experience smoother.

How about stuff like anonymous function vs class vs functional components? And others that lint might have a hard time analyzing? Well, don't overthink it. Just choose and stick to it as much as possible. There will be cases you will break standards that's why we have a way to give exceptions. Besides, the codebase itself on its own will reveal the pattern you chose. It's up to you but be careful not to unnecessarily create manual bureaucracy. The last thing you need is a document with standards that no one would follow in the end if things get heated. We want the project to be self-documenting and self-correcting to an extent.

---

# Bugs crawling everywhere? Write tests else you'll swear!

Manual testing, although always good to do, will fail at scale unless you hired infallible developers and a lot of quality engineers which is unrealistic and expensive. One way to lessen the proliferation of bugs is to reduce their food source. What's the favorite food source of bugs in a codebase? Untested code.

As much as possible, a developer should include a unit test in anything they submit, making sure that at the very least, the developer did due diligence in making sure their code works aside from leaving everything to chance of confirmation bias. That tests also serve as documentation on the cases one must consider and empower collaboration for other eyes to evaluate such cases in code reviews.

A step further is creating production robots and end-to-end testing with technologies like selenium to make manual testing obsolete. Another is integration tests to make sure your components work together well.

I prefer using [react testing library](https://kentcdodds.com/blog/introducing-the-react-testing-library) for unit and integration testing among other technologies. It follows a philosophy, "the more your tests resemble the way your software is used, the more confidence they can give you." (c) Kent Dodds. Motivation to use it can't get better than that. Pair it with a test runner library like jest and you're good to go!

---

# Is documentation a hassle? Well, read this section to avoid being in a pickle!

I want to begin by saying that the codebase should serve as your documentation. Documentation should be limited to requirements gathering, architecture, and admin/support. Anything additional such as a Google Doc for describing the codebase's ins and out would introduce overhead that no one enjoys. But in cases like a project for creating frameworks and libraries, you might want to have this documentation. Of course, there are many ways to do this.

Do you want a self-documenting project? You might want to use tools like [Storybook](https://storybook.js.org/docs/react/get-started/introduction). These tools are advantageous to be used mainly in design frameworks or libraries that introduce a set of niche functional components like charts as it forces you to follow a paradigm in component creation. If you're successful, it should include a static site that provides documentation for your different components and even test them.

The option above might not be for everyone. In all honesty, the thought of maintaining a doc still tastes disgusting. How about building handy documentation websites as hassle-free as possible? Better.

There are many tools to do this. Examples include [MDX-docs](https://github.com/jxnblk/mdx-docs) and [Docz](https://www.docz.site/). You write in the paradigm of MDX and automatically create the documentation website templated and styled. You can even easily import your components! It's still a bit manual but better than a document where you have to take screenshots of your components and copy-paste them.

You can opt to use a static analysis tool like react-docgen that analyzes your current React codebase and generate documentation. But, it offers less flexibility and pizzaz compared to the earlier examples. Well, at least it's easy to integrate this with a CI.

TLDR; don't use a google doc. Jesus Christ.

---

# Security holes? Let auditing fix your woes.

Dependency management can be tricky in the space of open-source where we combine different solutions. To make matters worse, these dependencies might introduce security holes. Luckily, we don't have to stray too far. I'm sure we are already using a tool that can help us. We need a specific command called npm audit or yarn audit if you're using yarn.

These built-in commands help you audit your existing dependencies described in package.json of whether or not we need to update anything. You may also use this script to update dependencies automatically. Our motivation in updating is to patch any problematic vulnerabilities or broken functionality. Auditing empowers developers to be more reactive on possible security holes.

The rule of thumb is to install the latest stable version as much as possible to lessen the need for frequent auditing. Regardless, there should be space in your development pipeline to check for these vulnerabilities automatically. I wouldn't include it in the CI/CD unless you want to be very proactive with your dependencies. But I would rather, just like in GitHub, incorporate a dependabot that audits your dependencies in a scheduled manner and automatically creates a pull request or merge request that you can approve or allow automatically to be pushed.

There's a way to [install dependabot in Gitlabs too](https://bobbybouwmann.nl/blog/dependabot-on-gitlab)!

---

# Manual deploy ruined your day? CI/CD will lead the way!

CI/CD is a must-have for any project to the point you should shove anyone that's in the way of keeping you from having one. It's a process to automatically integrate and deploy your changes. You put running lint and tests here. You may put auditing and documentation as well! It depends on what your team needs. The main goal is to integrate and deploy as safely as possible among other benefits of avoiding manually doing things.

Many tools can aid you. Github has [Github Actions](https://github.com/features/actions). Gitlab has [Gitlab Pipelines](https://docs.gitlab.com/ee/ci/pipelines/). There are external services such as [Circle CI](https://circleci.com/) and [Netlify](https://www.netlify.com/). All of which are highly configurable through specific files that are present in your codebase. (e.g. .gitlab-ci.yml, netlify.toml, etc. ) I personally use Netlify for this website.

Doing manual deployment is highly discouraged in the industry regardless. If you can't configure a CI/CD for whatever reason, at the very least, create a script that would initiate all checks and build as if it was a CI/CD doing it and then deploy.

Anything manual is more prone to human error. If you're maintaining a production application, you want to mitigate the likelihood of stuff going wrong.

---

Phew, that was quite a lot, hopefully, you survived my rhymes. I'm sure there are more practices out there. In my experience, all of these help my team achieve confidence in our collaboration and developer pipeline.

All of these practices will also [increase your confidence to fail](/blog/building-confidence-to-fail). (#shameless_plug)
