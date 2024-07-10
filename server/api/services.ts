export default defineEventHandler((event) => {
    const s: string = `[
    {
      "id": 1,
      "name": "Nimbus Assist",
      "description": "Short description of service one.",
      "longDes": "Long description of service one.",
      "sections": [
        "section 1",
        "section 2",
        "section 3",
        "section 4"
      ],
      "words": "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      "testimonials": [
        {
          "id": 1,
          "role": "role 1",
          "words": "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."
        },
        {
          "id": 2,
          "role": "role 2",
          "words": "Nisi vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque."
        },
        {
          "id": 5,
          "role": "role 3",
          "words": "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis.\\nFringilla sed placerat commodo bibendum integer.\\nDiam ut magna eleifend consectetur."
        }
      ]
    },
    {
      "id": 2,
      "name": "VeloSync Solutions",
      "description": "Short description of service one.",
      "longDes": "Long description of service one.",
      "sections": [
        "section 1",
        "section 2",
        "section 3",
        "section 4"
      ],
      "words": "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros  scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet  scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
      "testimonials": [
        {
          "id": 1,
          "role": "role 1",
          "words": "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."
        },
        {
          "id": 2,
          "role": "role 2",
          "words": "Nisi vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque."
        },
        {
          "id": 5,
          "role": "role 3",
          "words": "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis.\\nFringilla sed placerat commodo bibendum integer.\\nDiam ut magna eleifend consectetur."
        }
      ]
    }
  ]`;
    return {
        services: s
    }
})