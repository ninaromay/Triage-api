const bbdd = {
    modules : [
        {
            id: 0, color: 'rgba(0,122,255)',
            img:{
                    phone: '/assets/hero.png', logo:'/assets/hero.svg', apple: '/assets/download.svg'
                },
            text:{
                    title: 'Triage is first aid for your    inbox.',
                    content: 'Everything you loved about the    original Triage is back - only better.     Download Triage 2 on the App Store today.'
                },
            row: false, smaller: false, margin: false, margin_up: false, inv: false
        },
        {
            id: 1, color: 'rgba(255,45,85)',
            img:{
                    phone: '/assets/archive.png', logo:'/assets/arrow.svg', apple: ''
                },
            text:{
                    title: 'Drag left to archive',
                    content: 'Unread messages appear in a stack of cards, like this.'
                },
            row: true, smaller: true, margin: true, margin_up: false, inv: false
        },
        {
            id: 2, color: 'black',
            img:{
                    phone: '/assets/keep.png', logo:'/assets/arrow_inv.svg', apple: ''
                },
            text:{
                    title: 'Drag right to keep',
                    content: 'Or create your own custom workflow.'
                },
            row: false, smaller: true, margin: true, margin_up: false, inv: false
        },
        {
            id: 3, color: 'rgba(255,184,0)',
            img:{
                    phone: '/assets/expand.png', logo:'/assets/expand.svg', apple: ''
                },
            text:{
                    title: 'Tap to expand',
                    content: 'Open the message to view the whole thread.'
                },
            row: true, smaller: true, margin: false, margin_up: true, inv: true
        },
        {
            id: 4, color: 'rgba(112,0,255)',
            img:{
                    phone: '/assets/reply.png', logo:'/assets/reply.svg', apple: ''
                },
            text:{
                    title: 'Reply in context',
                    content: 'Send a quick reply without leaving the app.'
                },
            row: false, smaller: true, margin: false, margin_up: true, inv: false
        },
    ],
    cards: [
        {id: 0, svg: '/assets/mail.svg', padding: '0', inv: false,
        text: 'Works with Gmail, iCloud & IMAP', color: 'rgba(0,122,255)' },
        {id: 1, svg: '/assets/chip.svg', padding: '1em', inv: true,
        text: 'All processing happens on device', color: 'rgba(255,184,0)' },
        {id: 2, svg: '/assets/shield.svg', padding: '2em', inv: false,
        text: 'Your data is yours to stay', color: 'rgba(255,45,85)' },
        {id: 3, svg: '/assets/moon.svg', padding: '4em', inv: false,
        text: 'Supports dark mode', color: 'black' },
        {id: 4, svg: '/assets/thumb.svg', padding: '0.5em', inv: false,
        text: 'Free to use. Or pay for more features', color: 'rgba(112,0,255)' },
        {id: 5, svg: '/assets/hammer.svg', padding: '0.5em', inv: true,
        text: 'Built & maintained by indie developers', color: 'white' }
    ],
    cards2: [
        {id: 0, logo: '/assets/daring-fireball.png', height: '2rem', margin: '',
        text: 'Since I\'ve been using Triage, I\'m more caught up on my email than I have been in years.'},
        {id: 1, logo: '/assets/the-verge.svg', height: '1.25rem', margin: '',
        text: 'If you\'re constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.'},
        {id: 2, logo: '/assets/macworld.svg', height: '1.25rem', margin: '',
        text: 'Triage makes it feel seamless, and even fun, to achieve — if not Inbox Zero — at least Inbox Zen.'},
        {id: 3, logo: '/assets/maclife.png', height: '1.5rem', margin: '',
        text: 'Triage provides the first aid necessary to get your inbox back in fighting shape.'},
        {id: 4, logo: '/assets/clean-email.png', height: '2rem', margin: '',
        text: 'Triage is a boon to those who have struggled to keep their inboxes clean and organized.'},
        {id: 5, logo: '/assets/macstories.png', height: '2rem', margin: '',
        text: 'Triage is my new favorite email app for iPhone.'}
    ]
}

module.exports = {
    bbdd
}