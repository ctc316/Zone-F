const zoneData = {
  "wearforspeed": {
    "name": "Wear for speed",
    "intro": "The gloss will shine your life.",
    "visits": "137,834",
    "follows": "2,034",
    "followed": true,
    "collections": [
      {
        "cover": "../../static/collections/covers/sneakers@2x.png",
        "collection_name": "SNEAKERS",
        "items": [
          {
            "brand": "ADIDAS",
            "name": "black NMD Racer sneakers",
            "price": "182",
            "img": "../../static/collections/items/sneakers/adidas-black-nmd-racer-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/adidas-black-nmd-racer-sneakers-item-13509329.aspx?storeid=9359"
          },
          {
            "brand": "BALENCIAGA",
            "name": "Triple S sneakers",
            "price": "950",
            "img": "../../static/collections/items/sneakers/balenciaga-triple-s-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/balenciaga-triple-s-sneakers-item-13407935.aspx?storeid=10952"
          },
          {
            "brand": "CHLOÉ",
            "name": "multicoloured Sonnie mesh leather sneakers",
            "price": "470",
            "img": "../../static/collections/items/sneakers/chloe-multicoloured-sonnie-mesh-leather-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/chloe-multicoloured-sonnie-mesh-leather-sneakers-item-13316768.aspx?storeid=9359"
          },
          {
            "brand": "GUCCI",
            "name": "Rhyton sneakers with Interlocking G and heart",
            "price": "890",
            "img": "../../static/collections/items/sneakers/gucci-rhyton-sneakers-with-interlocking-g-and-heart@2x.png",
            "url": "https://www.farfetch.com/shopping/women/gucci-rhyton-sneakers-with-interlocking-g-and-heart-item-13437077.aspx?storeid=10644"
          },
          {
            "brand": "MAISON MARGIELA",
            "name": "hi-top Tabi sneakers",
            "price": "570",
            "img": "../../static/collections/items/sneakers/maison-margiela-hi-top-tabi-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/maison-margiela-hi-top-tabi-sneakers-item-13698833.aspx?storeid=11413"
          },
          {
            "brand": "OFF-WHITE",
            "name": "Low-top suede and mesh sneakers",
            "price": "715",
            "img": "../../static/collections/items/sneakers/off-white-low-top-suede-and-mesh-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/off-white-low-top-suede-and-mesh-sneakers-item-13575182.aspx?storeid=9359"
          },
          {
            "brand": "ALEXANDER MCQUEEN",
            "name": "oversized sole sneakers",
            "price": "490",
            "img": "../../static/collections/items/sneakers/alexander-mcqueen-oversized-sole-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/alexander-mcqueen-oversized-sole-sneakers-item-13557705.aspx?storeid=9359"
          },
          {
            "brand": "CALVIN KLEIN 205W39NYC",
            "name": "Carla 10 sneakers",
            "price": "567",
            "img": "../../static/collections/items/sneakers/calvin-klein-205w39nyc-carla-10-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/calvin-klein-205w39nyc-carla-10-sneakers-item-13881730.aspx?storeid=9336"
          },
          {
            "brand": "COMMON PROJECTS",
            "name": "Achilles Retro Low sneakers",
            "price": "411",
            "img": "../../static/collections/items/sneakers/common-projects-achilles-retro-low-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/common-projects-achilles-retro-low-sneakers-item-13766015.aspx?storeid=9689"
          },
          {
            "brand": "PUMA",
            "name": "low top leather trainers",
            "price": "136",
            "img": "../../static/collections/items/sneakers/puma-low-top-leather-trainers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/puma-low-top-leather-trainers-item-13171089.aspx?storeid=9158"
          },
          {
            "brand": "CONVERSE",
            "name": "x Comme Des Garçons Play Chuck 70 sneakers",
            "price": "200",
            "img": "../../static/collections/items/sneakers/converse-x-comme-des-garcons-play-chuck-70-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/converse-x-comme-des-garcons-play-chuck-70-sneakers-item-13813237.aspx?storeid=11218"
          },
          {
            "brand": "STELLA MCCARTNEY",
            "name": "Eclypse 40 sneakers",
            "price": "685",
            "img": "../../static/collections/items/sneakers/stella-mccartney-eclypse-40-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/stella-mccartney-eclypse-40-sneakers-item-13375474.aspx?storeid=9359"
          }
        ]
      },
      {
        "cover": "../../static/collections/covers/GYM@2x.png",
        "collection_name": "GYM STYLE",
        "items": [
          {
            "brand": "GUCCI",
            "name": "A",
            "price": "10,000",
            "img": "../../static/collections/items/sneakers/stella-mccartney-eclypse-40-sneakers@2x.png",
            "url": "https://www.farfetch.com/shopping/women/balenciaga-triple-s-sneakers-item-13407935.aspx?storeid=10952"
          }
        ]
      }
    ]
  },
  "timelessgood": {
    "name": "Timeless good",
    "intro": "Old buttons, good buttons.",
    "visits": "1,139,822",
    "follows": "10,196",
    "followed": true,
    "collections": []
  }
}


export default {
  followingZones () {
    return [
      {
        name: 'March et July', 
        zone_id: 'march_et_july'
      },
      { name: 'Zone 2',
        zone_id: 'zone_2'
      }
    ]
  },

  getById (id) {
    return zoneData[id]
  }
}
