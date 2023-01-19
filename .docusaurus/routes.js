import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd59'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e9c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '1ec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4af'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '711'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'bcc'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e20'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '9e7'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '13a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ea2'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'bf4'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '799'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fc1'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9a6'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '2aa'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '772'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd9b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '369'),
    exact: true
  },
  {
    path: '/docs/2.8.1',
    component: ComponentCreator('/docs/2.8.1', '97b'),
    routes: [
      {
        path: '/docs/2.8.1/category/tutorial---basics',
        component: ComponentCreator('/docs/2.8.1/category/tutorial---basics', '68b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/category/tutorial---extras',
        component: ComponentCreator('/docs/2.8.1/category/tutorial---extras', '699'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/intro',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/intro', '873'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-basics/congratulations', 'd47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-basics/create-a-blog-post', '422'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-basics/create-a-document', '972'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-basics/create-a-page', '539'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-basics/deploy-your-site', '96d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-basics/markdown-features', '90e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-extras/manage-docs-versions', 'a42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2.8.1/version-2.8.1/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/2.8.1/version-2.8.1/tutorial-extras/translate-your-site', 'b60'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '298'),
    routes: [
      {
        path: '/docs/category/console-module',
        component: ComponentCreator('/docs/category/console-module', '995'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/standard-modules',
        component: ComponentCreator('/docs/category/standard-modules', '30a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/standard-modules/console/clear',
        component: ComponentCreator('/docs/standard-modules/console/clear', '845'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/standard-modules/console/error',
        component: ComponentCreator('/docs/standard-modules/console/error', 'c7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/standard-modules/console/log',
        component: ComponentCreator('/docs/standard-modules/console/log', '43f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/standard-modules/console/table',
        component: ComponentCreator('/docs/standard-modules/console/table', 'f20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/standard-modules/console/warn',
        component: ComponentCreator('/docs/standard-modules/console/warn', '079'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'd55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '1f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '394'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
