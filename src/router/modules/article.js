
import Layout from 'views/layout/Layout'

const blogRouter = {
  path: '/article',
  component: Layout,
  redirect: '/article/list',
  name: 'Article',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'create',
      component: () => import('views/article'),
      name: 'CreateArticle',
      meta: { title: 'createArticle', icon: 'edit' }
    }
  ]
}

export default blogRouter
