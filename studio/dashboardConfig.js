export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd8e295b6029b0c77dc6c24',
                  title: 'Sanity Studio',
                  name: 'nice-projects-2-studio',
                  apiId: '018c5e8c-1f71-4178-bc26-8c68f88f98d4'
                },
                {
                  buildHookId: '5fd8e295a53603331bb948ed',
                  title: 'Landing pages Website',
                  name: 'nice-projects-2',
                  apiId: '15bb343c-2544-496c-aaf7-630ec092b560'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StudioCC17/nice-projects-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nice-projects-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
