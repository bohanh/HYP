import {Person} from "~/model/Person";

export default defineEventHandler((event) => {
    const p: string = `[
    {
      "id": 1,
      "name": "Dianne Russell",
      "description": "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      "socials": {
        "linkedin": "1",
        "twitter": "2",
        "instagram": "3",
        "facebook": "4"
      },
      "experiences": [],
      "projects": [
        1,
        2,
        3,
        4
      ],
      "services": [
        1,
        2
      ]
    },
    {
      "id": 2,
      "name": "Dianne Russell",
      "description": "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      "socials": {
        "linkedin": "1",
        "twitter": "2",
        "instagram": "3",
        "facebook": "4"
      },
      "experiences": [],
      "projects": [
        1,
        2,
        3,
        4
      ],
      "services": [
        1,
        2
      ]
    },
    {
      "id": 3,
      "name": "Dianne Russell",
      "description": "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      "socials": {
        "linkedin": "1",
        "twitter": "2",
        "instagram": "3",
        "facebook": "4"
      },
      "experiences": [],
      "projects": [
        1,
        2,
        3,
        4
      ],
      "services": [
        1,
        2
      ]
    },
    {
      "id": 4,
      "name": "Dianne Russell",
      "description": "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      "socials": {
        "linkedin": "1",
        "twitter": "2",
        "instagram": "3",
        "facebook": "4"
      },
      "experiences": [],
      "projects": [
        1,
        2,
        3,
        4
      ],
      "services": [
        1,
        2
      ]
    },
    {
      "id": 5,
      "name": "Dianne Russell",
      "description": "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      "socials": {
        "linkedin": "1",
        "twitter": "2",
        "instagram": "3",
        "facebook": "4"
      },
      "experiences": [],
      "projects": [
        1,
        2,
        3,
        4
      ],
      "services": [
        1,
        2
      ]
    }
  ]`;
    const peo: Person[] = JSON.parse(p);
    for (let per of peo) {
        if (per.id == parseInt(event.context.params!.id)) {
            return {
                person: JSON.stringify(per)
            }
        }
    }
    return {
        person: ''
    }
})