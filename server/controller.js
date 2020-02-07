var helpers = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    helpers
    .get()
    .then((info)=> res.status(200).send(info))
    .catch(err => res.status(400).send(err))
  },
  getOne: (req, res) => {
    helpers
    .get(req.baseUrl.slice(1))
    .then((info)=> res.status(200).send(info))
    .catch(err => res.status(400).send(err))
  }
  // post: (req, res) => {
  //   helpers.post(req.body)
  //   .then(() => res.status(201).send(console.log('post request resolved from controller'))
  //   )
  //   .catch(err => res.status(401).send(err))
  // },
  // put: (req, res) => {
  //   helpers.update(req.params._id, req.body)
  //   .then(() => res.status(202).send(console.log('update request resolved from controller')))
  //   .catch(err => res.status(402).send(err))
  // },
  // delete: (req, res) => {
  //   helpers.delete(req.params._id)
  //   .then(() => res.status(203).send(console.log('delete request resolved from controller')))
  //   .catch(err => res.status(403).send(err))
  // }
}

module.exports = controller;