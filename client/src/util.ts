interface Projects {
  name: string;
  cover: string;
  artist: string;
  id: string;
  active: boolean;
}

function listOfProjects(): Projects[] {
  return [
    {
      name: "Wire Jewelry",
      cover:
        "https://scontent.ftxl2-1.fna.fbcdn.net/v/t58.17529-6/76537186_572065571291507_6660416342758083158_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6cb3ed&_nc_ohc=3jPIJXK4UwkAX-IfHBZ&_nc_ht=scontent.ftxl2-1.fna&oh=00_AT9j57CMRFmFi0Oak8MQaKIZXAAf9VHqHgu9X4FWJSbvhA&oe=62D689F4",
      artist: "Roxana Pardo",
      id: "11",
      active: true,
    },
    {
      name: "Resin Jewelry",
      cover:
        "https://scontent.ftxl2-1.fna.fbcdn.net/v/t58.17529-6/124690994_1197256621076718_1171620376318947385_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6cb3ed&_nc_ohc=uyfrYNuLmW8AX9KqmFb&_nc_ht=scontent.ftxl2-1.fna&oh=00_AT-LUSW8CQC-pIHPWE1K9MO_lgIbExIzlhyhh8Dba9XniQ&oe=62D6D035",
      artist: "Mia Winston",
      id: "21",
      active: true,
    },
    {
      name: "Resin Jewelry",
      cover:
        "https://media.istockphoto.com/photos/unfinished-diy-woven-friendship-bracelets-with-abstract-geometric-picture-id1320291381?b=1&k=20&m=1320291381&s=170667a&w=0&h=fx3u2qD3YQmCHqp_yZ-jLna2qcBz8pyW2TGx1tO6JtY=",
      artist: "Mercedes Salazar",
      id: "32",
      active: true,
    },
    {
      name: "Rope",
      cover:
        "https://scontent.ftxl2-1.fna.fbcdn.net/v/t58.17529-6/76360890_457517209038763_4867317172681997382_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6cb3ed&_nc_ohc=_1LJlt327qQAX_q2yfp&_nc_ht=scontent.ftxl2-1.fna&oh=00_AT_VU24t12ntIQin7h-EvklHRwgyDoRa5vUUgLIc9sN_ag&oe=62D6B717",
      artist: "Beth Pegler",
      id: "43",
      active: true,
    },
    {
      name: "Weave",
      cover:
        "https://scontent.ftxl2-1.fna.fbcdn.net/v/t58.17529-6/99830706_1448754972252440_56681917655311852_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6cb3ed&_nc_ohc=r9kdEt7BFp4AX9_Ou8H&_nc_oc=AQnX478uo4mqxI_YXleV52mEAHsjD-QOofajnyeawnw7HMMsUGp23a-E8k24xjVTIVE&_nc_ht=scontent.ftxl2-1.fna&oh=00_AT8WXr8FlIErqzsOS0JJaYGJrtutA_OM1Gi5cnuFK3BzQg&oe=62D6A70D",
      artist: "Marion Mazo",
      id: "54",
      active: true,
    },
    {
      name: "contemporary",
      cover:
        "https://scontent.ftxl2-1.fna.fbcdn.net/v/t58.17529-6/128640203_166150899288447_9152779947679128475_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6cb3ed&_nc_ohc=OFUq-f4K9k8AX_SRYB9&_nc_ht=scontent.ftxl2-1.fna&oh=00_AT-2M810EP-UwUUK0KydkJb9K7l-2U3fPNchIwDZ2u6h8g&oe=62D6767C",
      artist: "Maeberry",
      id: "43",
      active: true,
    },
    {
      name: "Custom jewelry",
      cover: "https://scontent.ftxl2-1.fna.fbcdn.net/v/t58.17529-6/100007118_865735528151669_3169719271989557422_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6cb3ed&_nc_ohc=6xgNUTX4wZIAX--XFfd&_nc_ht=scontent.ftxl2-1.fna&oh=00_AT-DgaP2_uhs0pVYZmwun7ZDdq4dIZUkEJzKdkge9Nwb5w&oe=62D6EF08",
      artist: "Karen",
      id: "65",
      active: true,
    },
  ];
}

export default listOfProjects;