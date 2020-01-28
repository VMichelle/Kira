
export default function data() {

    let myInitialState = {
        themes: [
            {id: 1, name:'Canada'},
            {id: 2, name:'United States'},
            {id: 3, name:'South America'}
        ],
        initiatives: [
            {id: 1, name:'Ontario', themeId: 1},
            {id: 2, name:'New York', themeId: 2},
            {id: 4, name:'California', themeId: 2},
            {id: 6, name:'Nebraska', themeId: 2},
            {id: 3, name:'Brazil', themeId: 3},
            {id: 5, name:'Chile', themeId: 3}
        ],
        epics: [
            {
                id: 1,
                name: 'First Epic',
                details: '1 Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.',
                initiativeId: 1,
                done: false
            },
            {
                id: 2,
                name: 'Second Epic',
                details: '2 Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.',
                initiativeId: 2,
                storyId: 2,
                done: false
            }
        ],
        stories: [
            {
                id: 1,
                name:'first story',
                title: 'First Title',
                description: 'Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam.',
                assignee: 2,
                reporter: 1,
                storyPoints: 3,
                priority: 5,
                sprint: 2,
                epicId: 1,
                status: false
            },
            {
                id: 2,
                name:'second story',
                title: 'Second Title',
                description: 'Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam.',
                assignee: 1,
                reporter: 1,
                storyPoints: 3,
                priority: 5,
                sprint: 2,
                epicId: 2,
                status: false
            }
        ]
      };

    return (myInitialState)
}



