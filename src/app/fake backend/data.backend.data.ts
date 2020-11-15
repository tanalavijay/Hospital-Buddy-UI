import { InMemoryDbService } from 'angular-in-memory-web-api';

export class Data implements InMemoryDbService {
    createDb() {

        const Leads = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                industry: 'Mining',
                prospects: '2',
                campaign:'SARA',
                leads:'0',
                profile: {
                    name: "Maria",
                    surname: "Rodriguez",
                    birthday: new Date(1981, 2, 29),
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "BGR",
                    position: "Qualification checklist",
                    salary: 5000
                },
                contacts: {
                    email: "maria@bgr.com",
                    phone: "(458) 458-6977",
                    address: "USA"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-02-13T12:20:40.511Z",
                    joinedDate: "2017-09-25T16:15:43.511Z"
                }
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                industry: 'Health care',
                prospects: '3',
                leads:'5',
                campaign:'Products',
                profile: {
                    name: "William",
                    surname: "Heffelfinger",
                    birthday: new Date(1992, 11, 20),
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Tcb EMC",
                    position: "Lead qualification checklist",
                    salary: 17000
                },
                contacts: {
                    email: "William@tcb.com",
                    phone: "(410) 478-6311",
                    address: "Canada"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-06-17T17:21:43.511Z"
                }
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                industry: 'Finance',
                prospects: '1',
                campaign:'CEO',
                leads:'2',
                profile: {
                    name: "Jesper",
                    surname: "Mikkelson",
                    birthday: new Date(1979, 10, 21),
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Spotful",
                    position: "Checklist criteria 1",
                    salary: 13000
                },
                contacts: {
                    email: "Jesper@spotful.com",
                    phone: "(247) 457-7821",
                    address: "India"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-07-25T14:14:43.511Z"
                }
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                industry: 'Sales',
                prospects: '1',
                leads:'5',
                campaign:'TDR',
                profile: {
                    name: "Maria",
                    surname: "Garcia",
                    birthday: new Date(1982, 6, 18),
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Qualification checklist",
                    salary: 18000
                },
                contacts: {
                    email: "garcia@Acareporting.com",
                    phone: "9885478856",
                    address: "Vancouver"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-05-17T18:15:40.511Z"
                }
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                industry: 'Billing',
                prospects: '4',
                campaign:'CV',
                leads:'3',
                profile: {
                    name: "Jenitra",
                    surname: "Shields",
                    birthday: new Date(1992, 12, 2),
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Sky",
                    position: "Lead qualification checklist",
                    salary: 10000
                },
                contacts: {
                    email: "shields@sky.com",
                    phone: "(257) 136-7592",
                    address: "Ontario"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-03-27T10:24:40.511Z"
                }
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                industry: 'Infrastructure',
                prospects: '2',
                campaign:'Startup',
                leads:'5',
                profile: {
                    name: "Jeff",
                    surname: "Gandis",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "Concor",
                    position: "Checklist criteria 2",
                    salary: 21000
                },
                contacts: {
                    email: "Jeff@concor.com",
                    phone: "(258) 234-7521",
                    address: "Australia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-01-27T20:20:40.511Z"
                }
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                industry: 'Finance',
                prospects: '6',
                campaign:'SARA',
                leads:'2',
                profile: {
                    name: "Kimberly",
                    surname: "Marks",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Red Leaf",
                    position: "Lead qualification checklist 2",
                    salary: 31000
                },
                contacts: {
                    email: "marks@redleaf.com",
                    phone: "(201) 103-7309",
                    address: "Australia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-09-14T13:16:40.511Z"
                }
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                industry: 'Reporting',
                prospects: '1',
                campaign:'Product',
                leads:'3',
                profile: {
                    name: "William",
                    surname: "Johnson",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "EFCO",
                    position: "Qualification criteria 2",
                    salary: 50000
                },
                contacts: {
                    email: "william@microsoft.com",
                    phone: "(249) 397-1287",
                    address: "Pennsylvania"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-10-21T09:30:40.511Z"
                }
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                industry: 'Health care',
                prospects: '2',
                campaign:'CEO',
                leads:'6',
                profile: {
                    name: "Kaylee",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "GMS",
                    position: "Sales Manager",
                    salary: 15000
                },
                contacts: {
                    email: "kaylee@gms.com",
                    phone: "(217) 124-9852",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-12-29T05:20:40.511Z"
                }
            },


            {
                id: 10,
                username: "adam.82",
                password: "adam123",
                industry: 'Infrastructure',
                prospects: '2',
                campaign:'Startup',
                leads:'5',
                profile: {
                    name: "Jeff",
                    surname: "Gandis",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Product Manager",
                    salary: 21000
                },
                contacts: {
                    email: "Jeff@bluestoneindia.com",
                    phone: "(258) 234-7521",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-01-27T20:20:40.511Z"
                }
            },
            {
                id: 11,
                username: "tereza.s",
                password: "tereza123",
                industry: 'Finance',
                prospects: '6',
                leads:'4',
                profile: {
                    name: "Leesa",
                    surname: "Immanuel",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Sales Manager",
                    salary: 31000
                },
                contacts: {
                    email: "Immaneul@bluestoneindia.com",
                    phone: "(201) 103-7309",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-09-14T13:16:40.511Z"
                }
            },
            {
                id: 12,
                username: "michael.b",
                password: "michael123",
                industry: 'Reporting',
                prospects: '1',
                leads:'2',
                profile: {
                    name: "William",
                    surname: "Johnson",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Software Developer",
                    salary: 50000
                },
                contacts: {
                    email: "william@bluestoneindia.com",
                    phone: "(249) 397-1287",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-10-21T09:30:40.511Z"
                }
            },
            {
                id: 13,
                username: "michelle.81",
                password: "michelle123",
                industry: 'Health care',
                prospects: '2',
                leads:'5',
                profile: {
                    name: "Kaylee",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Sales Manager",
                    salary: 15000
                },
                contacts: {
                    email: "kaylee@bluestoneindia.com",
                    phone: "(217) 124-9852",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-12-29T05:20:40.511Z"
                }
            }

        ];

        const Campaigns = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                campaignName: 'SARA',
                industry: 'Infrastructure',
                prospects: '4',
                
                profile: {
                    name: "Ashley",
                    surname: "Ahlberg",
                    birthday: new Date(1981, 2, 29),
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "Google",
                    position: "Product Designer",
                    salary: 5000
                },
                contacts: {
                    email: "ashley@gmail.com",
                    phone: "(202) 756-9756",
                    address: "Washington, USA"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-10-13T12:20:40.511Z",
                    joinedDate: "2017-04-21T18:25:43.511Z"
                }
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                campaignName: 'Products',
                industry: 'Sales',
                prospects: '1',
                profile: {
                    name: "Bruno",
                    surname: "Vespa",
                    birthday: new Date(1992, 11, 20),
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Dell EMC",
                    position: "Sales Manager",
                    salary: 17000
                },
                contacts: {
                    email: "bruno@dell.com",
                    phone: "(415) 231-0332",
                    address: "Ottawa, Canada"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-05-20T18:25:43.511Z"
                }
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                campaignName: 'Customs',
                industry: 'Finance',
                prospects: '1',
                profile: {
                    name: "Andy",
                    surname: "Warhol",
                    birthday: new Date(1979, 10, 21),
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Adecco",
                    position: "Product Manager",
                    salary: 13000
                },
                contacts: {
                    email: "andy@adecco.com",
                    phone: "(212) 457-2308",
                    address: "New York, USA"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-06-28T15:25:43.511Z"
                }
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                campaignName: 'Customs',
                industry: 'Sales',
                prospects: '2',
                profile: {
                    name: "Julia",
                    surname: "Aniston",
                    birthday: new Date(1982, 6, 18),
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Sales Manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@Acareporting.com",
                    phone: "(224) 267-1346",
                    address: "Toronto, Canada"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                }
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                campaignName: 'SARA',
                industry: 'Billing',
                prospects: '6',
                profile: {
                    name: "Lusia",
                    surname: "Mokka",
                    birthday: new Date(1992, 12, 2),
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Alphabet",
                    position: "Office Manager",
                    salary: 10000
                },
                contacts: {
                    email: "lusia@alphabet.com",
                    phone: "(224) 267-1346",
                    address: "Andaman & Nicobar"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-06-28T12:20:40.511Z"
                }
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                campaignName: 'Products',
                industry: 'Infrastructure',
                prospects: '3',
                leads:'5',
                profile: {
                    name: "Siva",
                    surname: "Kodali",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "General Electric",
                    position: "Product Manager",
                    salary: 21000
                },
                contacts: {
                    email: "adam@gen-el.com",
                    phone: "(224) 267-1346",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-06-27T14:20:40.511Z"
                },
                startdate: {
                    date:"01-28-2017"
                }
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                campaignName: 'SARA',
                industry: 'Sales',
                prospects: '6',
                leads:'4',
                profile: {
                    name: "Rohin",
                    surname: "Sama Reddy",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Southwest Airlines",
                    position: "Sales Manager",
                    salary: 31000
                },
                contacts: {
                    email: "tereza@airlines.com",
                    phone: "(214) 617-2614",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-06-29T15:20:40.511Z"
                },
                startdate: {
                    date:"02-15-2015"
                }
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                campaignName: 'Products',
                industry: 'Infrastructure',
                prospects: '1',
                leads:'6',
                profile: {
                    name: "Srinu",
                    surname: "LLi",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "Microsoft",
                    position: "Software Developer",
                    salary: 50000
                },
                contacts: {
                    email: "michael@microsoft.com",
                    phone: "(267) 388-1637",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-06-30T11:30:40.511Z"
                },
                startdate: {
                    date:"12-08-2015"
                }
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                campaignName: 'SARA',
                industry: 'Finance',
                prospects: '1',
                leads:'3',
                profile: {
                    name: "Siva",
                    surname: "Kalisetti",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "Starbucks",
                    position: "Sales Manager",
                    salary: 15000
                },
                contacts: {
                    email: "michelle@starbucks.com",
                    phone: "(267) 388-1637",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-03-29T17:20:40.511Z"
                },
                startdate: {
                    date:"04-25-2015"
                }
            },
            {
                id: 10,
                username: "Rohin",
                password: "rohin123",
                campaignName: 'TDR',
                industry: 'Sales',
                prospects: '4',
                leads:'5',
                profile: {
                    name: "Rohin",
                    surname: "Sama Reddy",
                    birthday: new Date(1982, 6, 18),
                    gender: "male",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Sales Manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@Acareporting.com",
                    phone: "(224) 267-1346",
                    address: "Washington, USA"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                },
                startdate: {
                    date:"02-15-2015"
                }
            },
            {
                id: 11,
                username: "Siva",
                password: "siva123",
                campaignName: 'CV',
                industry: 'Sales',
                prospects: '1',
                leads:'3',
                profile: {
                    name: "Siva",
                    surname: "Kalisetti",
                    birthday: new Date(1982, 6, 18),
                    gender: "male",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Sales Manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@Acareporting.com",
                    phone: "(224) 267-1346",
                    address: "Toronto, Canada"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                },
                startdate: {
                    date:"05-27-2017"
                }
            },
            {
                id: 12,
                username: "Srinu",
                password: "srinu123",
                campaignName: 'Startup',
                industry: 'Sales',
                prospects: '4',
                leads:'2',
                profile: {
                    name: "Srinu",
                    surname: "LLi",
                    birthday: new Date(1982, 6, 18),
                    gender: "male",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Sales Manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@Acareporting.com",
                    phone: "(224) 267-1346",
                    address: "New York, USA"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                },
                startdate: {
                    date:"04-20-2016"
                }
            },
            {
                id: 13,
                username: "Siva",
                password: "siva123",
                campaignName: 'CEO',
                industry: 'Sales',
                prospects: '4',
                leads:'1',
                profile: {
                    name: "Siva",
                    surname: "Kodali",
                    birthday: new Date(1982, 6, 18),
                    gender: "male",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Sales Manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@Acareporting.com",
                    phone: "(224) 267-1346",
                    address: "Ottawa, Canada"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                },
                startdate: {
                    date:"09-05-2018"
                }
            },

        ];


        const Accounts = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                industry: 'Mining',
                prospects: '2',
                profile: {
                    name: "Samhitha",
                    surname: "Reddy",
                    birthday: new Date(1981, 2, 29),
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "BGR",
                    position: "Product Designer",
                    salary: 5000
                },
                contacts: {
                    email: "Samhitha@bgr.com",
                    phone: "(417) 147-1045",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-02-13T12:20:40.511Z",
                    joinedDate: "2017-09-25T16:15:43.511Z"
                }
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                industry: 'Health care',
                prospects: '3',
                profile: {
                    name: "Sampath",
                    surname: "Kumar",
                    birthday: new Date(1992, 11, 20),
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Tcb EMC",
                    position: "Sales Manager",
                    salary: 17000
                },
                contacts: {
                    email: "Sampath@tcb.com",
                    phone: "(475) 415-6399",
                    address: "Vancouver, Canada"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-06-17T17:21:43.511Z"
                }
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                industry: 'Finance',
                prospects: '1',
                profile: {
                    name: "Jesper",
                    surname: "Mikkelson",
                    birthday: new Date(1979, 10, 21),
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Spotful",
                    position: "Product Manager",
                    salary: 13000
                },
                contacts: {
                    email: "Jesper@spotful.com",
                    phone: "(247) 457-7821",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-07-25T14:14:43.511Z"
                }
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                industry: 'Sales',
                prospects: '5',
                profile: {
                    name: "Bhuvana",
                    surname: "Yadav",
                    birthday: new Date(1982, 6, 18),
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Sales Manager",
                    salary: 18000
                },
                contacts: {
                    email: "Bhuvana@Acareporting.com",
                    phone: "(258) 473-2588",
                    address: "Fremont, CA"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-05-17T18:15:40.511Z"
                }
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                industry: 'Billing',
                prospects: '4',
                profile: {
                    name: "Siri",
                    surname: "Mokka",
                    birthday: new Date(1992, 12, 2),
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Sky",
                    position: "Office Manager",
                    salary: 10000
                },
                contacts: {
                    email: "Siri@sky.com",
                    phone: "(257) 136-7592",
                    address: "Andaman & Nicobar"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-03-27T10:24:40.511Z"
                }
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                industry: 'Infrastructure',
                prospects: '2',
                profile: {
                    name: "Jeff",
                    surname: "Gandis",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "Concor",
                    position: "Product Manager",
                    salary: 21000
                },
                contacts: {
                    email: "Jeff@concor.com",
                    phone: "(258) 234-7521",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-01-27T20:20:40.511Z"
                }
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                industry: 'Finance',
                prospects: '6',
                profile: {
                    name: "Leesa",
                    surname: "Immanuel",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Red Leaf",
                    position: "Sales Manager",
                    salary: 31000
                },
                contacts: {
                    email: "Leesa@redleaf.com",
                    phone: "(201) 103-7309",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-09-14T13:16:40.511Z"
                }
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                industry: 'Reporting',
                prospects: '1',
                profile: {
                    name: "William",
                    surname: "Johnson",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "EFCO",
                    position: "Software Developer",
                    salary: 50000
                },
                contacts: {
                    email: "william@microsoft.com",
                    phone: "(249) 397-1287",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-10-21T09:30:40.511Z"
                }
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                industry: 'Health care',
                prospects: '2',
                profile: {
                    name: "Kaylee",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "GMS",
                    position: "Sales Manager",
                    salary: 15000
                },
                contacts: {
                    email: "kaylee@gms.com",
                    phone: "(217) 124-9852",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-12-29T05:20:40.511Z"
                }
            }

        ];


        const Contacts = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                industry: 'Mining',
                prospects: '2',
                profile: {
                    name: "Sonja",
                    surname: "Drangsholt",
                    birthday: new Date(1981, 2, 29),
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "BGR",
                    position: "Product Designer",
                    salary: 5000
                },
                contacts: {
                    email: "sonja@bgr.com",
                    phone: "(745) 852-6397",
                    address: "Los Angeles"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-02-13T12:20:40.511Z",
                    joinedDate: "2017-09-25T16:15:43.511Z"
                }
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                industry: 'Health care',
                prospects: '3',
                profile: {
                    name: "James",
                    surname: "Johnson",
                    birthday: new Date(1992, 11, 20),
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Tcb EMC",
                    position: "Sales Manager",
                    salary: 17000
                },
                contacts: {
                    email: "james@tcb.com",
                    phone: "(745) 589-1475",
                    address: "Connecticut"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-06-17T17:21:43.511Z"
                }
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                industry: 'Finance',
                prospects: '1',
                profile: {
                    name: "Jesper",
                    surname: "Mikkelson",
                    birthday: new Date(1979, 10, 21),
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Spotful",
                    position: "Product Manager",
                    salary: 13000
                },
                contacts: {
                    email: "Jesper@spotful.com",
                    phone: "(247) 457-7821",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-07-25T14:14:43.511Z"
                }
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                industry: 'Sales',
                prospects: '5',
                profile: {
                    name: "Mary",
                    surname: "Bailo",
                    birthday: new Date(1982, 6, 18),
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Aca reporting",
                    position: "Sales Manager",
                    salary: 18000
                },
                contacts: {
                    email: "mary@Acareporting.com",
                    phone: "(258) 758-5247",
                    address: "Illinois"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-05-17T18:15:40.511Z"
                }
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                industry: 'Billing',
                prospects: '4',
                profile: {
                    name: "Sami",
                    surname: "Grisafe",
                    birthday: new Date(1992, 12, 2),
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Sky",
                    position: "Office Manager",
                    salary: 10000
                },
                contacts: {
                    email: "sami@sky.com",
                    phone: "(257) 136-7592",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-03-27T10:24:40.511Z"
                }
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                industry: 'Infrastructure',
                prospects: '2',
                profile: {
                    name: "Jeff",
                    surname: "Gandis",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "Concor",
                    position: "Product Manager",
                    salary: 21000
                },
                contacts: {
                    email: "Jeff@concor.com",
                    phone: "(258) 234-7521",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-01-27T20:20:40.511Z"
                }
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                industry: 'Finance',
                prospects: '6',
                profile: {
                    name: "Leesa",
                    surname: "Immanuel",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Red Leaf",
                    position: "Sales Manager",
                    salary: 31000
                },
                contacts: {
                    email: "Immaneul@redleaf.com",
                    phone: "(201) 103-7309",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-09-14T13:16:40.511Z"
                }
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                industry: 'Reporting',
                prospects: '1',
                profile: {
                    name: "William",
                    surname: "Johnson",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "EFCO",
                    position: "Software Developer",
                    salary: 50000
                },
                contacts: {
                    email: "william@microsoft.com",
                    phone: "(249) 397-1287",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-10-21T09:30:40.511Z"
                }
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                industry: 'Health care',
                prospects: '2',
                profile: {
                    name: "Kaylee",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "GMS",
                    position: "Sales Manager",
                    salary: 15000
                },
                contacts: {
                    email: "kaylee@gms.com",
                    phone: "(217) 124-9852",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-12-29T05:20:40.511Z"
                }
            },

            {
                id: 10,
                username: "adam.82",
                password: "adam123",
                industry: 'Infrastructure',
                prospects: '2',
                profile: {
                    name: "Jeff",
                    surname: "Gandis",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Product Manager",
                    salary: 21000
                },
                contacts: {
                    email: "Jeff@bluestoneindia.com",
                    phone: "(258) 234-7521",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-01-27T20:20:40.511Z"
                }
            },
            {
                id: 11,
                username: "tereza.s",
                password: "tereza123",
                industry: 'Finance',
                prospects: '6',
                profile: {
                    name: "Leesa",
                    surname: "Immanuel",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Sales Manager",
                    salary: 31000
                },
                contacts: {
                    email: "Leesa@bluestoneindia.com",
                    phone: "(201) 103-7309",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-09-14T13:16:40.511Z"
                }
            },
            {
                id: 12,
                username: "michael.b",
                password: "michael123",
                industry: 'Reporting',
                prospects: '1',
                profile: {
                    name: "William",
                    surname: "Johnson",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Software Developer",
                    salary: 50000
                },
                contacts: {
                    email: "william@bluestoneindia.com",
                    phone: "(249) 397-1287",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-10-21T09:30:40.511Z"
                }
            },
            {
                id: 13,
                username: "michelle.81",
                password: "michelle123",
                industry: 'Health care',
                prospects: '2',
                profile: {
                    name: "Kaylee",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "Blue Stone India ",
                    position: "Sales Manager",
                    salary: 15000
                },
                contacts: {
                    email: "kaylee@bluestoneindia.com",
                    phone: "(217) 124-9852",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-12-29T05:20:40.511Z"
                }
            }

        ];


        const Users = [
            { intApplicantId: 1, vcName: 'Dwayne', businessCenter:'Core Health', uniqueId: "10214785", status: true, vcPhone: '6045555555', userType:"Attorney", vcPosition: "Project Managers ", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', assign:3, vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15", workHours: 8.00, Permissions: '136/136',type:'Auditor' },
            { intApplicantId: 2, vcName: 'Dave', businessCenter:'Sapphire MD', uniqueId: "10214201", status: true, vcPhone: '8043336666', userType:"Internal Physician", vcPosition: "Project Managers ", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', assign:7, vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15", workHours: 10.00, Permissions: '136/136', type:'Auditor' },
            { intApplicantId: 3, vcName: 'Emily', businessCenter:'Prime Orthopedics', uniqueId: "10217496", status: true, vcPhone: '5041118888', userType:"Referring Physician", vcPosition: "Production Team", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', assign:1, vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15", workHours: 8.00, Permissions: '136/136',type:'Auditee' },
            { intApplicantId: 4, vcName: 'Joe', businessCenter:'Pain Allieviation', uniqueId: '10210258', status: true, assign:5, vcPhone: '7047775555', userType:"Front Desk", workHours: 8.00, Permissions: '136/136',type:'Auditor' },
            { intApplicantId: 5, vcName: 'Kate', businessCenter:'Sapphire MD', uniqueId: '10247858', status: true, assign:8, vcPhone: '9045559999', userType:"Attorney", workHours: 8.00, Permissions: '136/136',type:'Auditor' },
            { intApplicantId: 6, vcName: 'Scott', businessCenter:'Centre for Pain Relief', uniqueId: '10214702', status: true, assign:1, vcPhone: '9049995555', userType:"Front Desk", workHours: 8.00, Permissions: '136/136',type:'Auditee' },
            { intApplicantId: 7, vcName: 'Dan', businessCenter:'Prime Orthopedics', uniqueId: '96214547', status: true, assign:6, vcPhone: '5045559654', userType:"Attorney", workHours: 8.00, Permissions: '136/136',type:'Auditor' },
            { intApplicantId: 8, vcName: 'Stephanie', businessCenter:'Core Health', uniqueId: '32014785', assign:10, status: true, vcPhone: '6041231122', userType:"Internal Physician", workHours: 8.00, Permissions: '136/136',type:'Auditee' },
        ];
        return { Leads, Campaigns, Accounts, Contacts, Users };
    }
}   