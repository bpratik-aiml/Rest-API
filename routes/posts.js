const express = require('express')
const app = express()
const Post = require('../models/Post')

const router = express.Router()

//gets back all the post
router.get('/', async(req, res)=>{
    try{
        const data = await Post.find()
        res.json(data)
    }
    catch(err){
        res.json({message: err})
    }
})

//submits a post
router.post('/', async(req, res)=>{
    const post = new Post({
        title: req.body.title, 
        description: req.body.description
    })
 try{
    const savedPost = await post.save()
    res.json(savedPost)
}
    catch(err){
        res.json({message: err})
    }
    // .then(data=>{
    //     res.json(data)
    // })
    // .catch(err=>{
    //     res.json({message: err })
    // })
})

//getting back a specific post
router.get('/:postId', async(req, res)=>{
    try{
    const post = await Post.findById(req.params.postId)
    res.json(post)
}
    catch(err){
        res.json({message: err})
    }
})

//deleting a post
router.delete('/:postId', async(req, res)=>{
    try{
    const post = await Post.deleteOne({_id: req.params.postId})
    res.json(post)
}
    catch(err){
        res.json({message: err})
    }
})

//updating a post
router.patch('/:postId', async(req, res)=>{
    try{
        const updatedPost =  await Post.updateOne({_id: req.params.postId}, {$set : {title:req.body.title}})
        res.json(updatedPost)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router

