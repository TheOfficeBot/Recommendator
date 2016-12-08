// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
const User = require('../database/db').User
const Favorites = require('../database/db').Favorites

module.exports = {
  users: {
    get: (req, res) => {
      User
        .findOne({
          email: req.email,
          password: req.password
        })
        .exec((err, user) => {
          if (err) {
            throw err
          } else {
            res.json(user)
          }
        })
    },
    post: (req, res) => {
      User
        .create({
          firstName: req.firstName,
          email: req.email,
          password: req.password
        }, (err, user) => {
          if (err) {
            throw err
          }
        })
    }
  },
  favorites: {
    get: (req, res) => {
      Favorites.find().exec((err, data) => {
        res.send(data)
      })
    },
    post: (data) => {
      Favorites.create(data, (err) => {
        if (err) return err
      })
    },
    delete: (req, res) => {
      Favorites.remove({ _id: req.deleteMe }, (err, data) => {
        res.send(data)
      })
    }
  },
  hotspots: {
    get: (req, res) => {
      Hotspot.find().exec((err, data) => {
        res.send(data)
      })
    },
    post: (req, res) => {
      console.log('this is working: ', req)
      Hotspot.create(req, (err) => {
        if (err) {
          return err
        }
      })
    }
  }
}
