

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

  collection () {
    return [
      {
        brand: 'GUCCI',
        name: 'A',
        price: '10,000'
      },
      {
        brand: 'GUCCI',
        name: 'B',
        price: '20,000'
      },
      {
        brand: 'GUCCI',
        name: 'C',
        price: '30,000'
      },
      {
        brand: 'GUCCI',
        name: 'D',
        price: '40,000'
      },
      {
        brand: 'GUCCI',
        name: 'E',
        price: '50,000'
      }
    ]
  },

  zone () {
    return {
      followers: 1000,
      collections: [
        {
          cover: 'https://via.placeholder.com/1024x300?text=Collection',
          collection_name: 'COLLECTION 1',
          items: [
            {
              brand: 'GUCCI',
              name: 'A',
              price: '10,000'
            },
            {
              brand: 'GUCCI',
              name: 'B',
              price: '20,000'
            },
            {
              brand: 'GUCCI',
              name: 'C',
              price: '30,000'
            },
            {
              brand: 'GUCCI',
              name: 'D',
              price: '40,000'
            },
            {
              brand: 'GUCCI',
              name: 'E',
              price: '50,000'
            }
          ]
        },
        {
          cover: 'https://via.placeholder.com/1024x300?text=Collection',
          collection_name: 'COLLECTION 2',
          items: [
            {
              brand: 'GUCCI',
              name: 'A',
              price: '10,000'
            },
            {
              brand: 'GUCCI',
              name: 'B',
              price: '20,000'
            },
            {
              brand: 'GUCCI',
              name: 'C',
              price: '30,000'
            },
            {
              brand: 'GUCCI',
              name: 'D',
              price: '40,000'
            },
            {
              brand: 'GUCCI',
              name: 'E',
              price: '50,000'
            }
          ]
        }
      ]
    }
  }
  // addPost (params) {
  //   return Api().post('posts', params)
  // },

  // updatePost (params) {
  //   return Api().put('posts/' + params.id, params)
  // },

  // getPost (params) {
  //   return Api().get('post/' + params.id)
  // },

  // deletePost (id) {
  //   return Api().delete('posts/' + id)
  // }
}
