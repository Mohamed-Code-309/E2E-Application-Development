const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.get('', async (req, res) => {
    try {
        const users = await User.find({});
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ msg: `Failed to list all users` });
    }
})

//order is very important for the next 2 APIs
router.get('/find', async (req, res) => {
    const search_param = req.query.search;
    try {
        const search_key = { $regex: search_param, $options: 'i' };
        const users = await User.find({ $or: [{ name: search_key }, { email: search_key }] });
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ msg: err });
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ _id: id });
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ msg: `Failed to find user with _id = ${id}` });
    }
})


router.post('', async (req, res) => {
    const body = req.body;
    try {
        const newUser = await User.create(body);
        return res.json(newUser);
    } catch (err) {
        return res.status(500).json({ msg: `Failed to add new user` });
    }
})


router.put('', async (req, res) => {
    const { _id, ...rest } = req.body;
    try {
        const updateUser = await User.updateOne({ _id: _id }, rest);
        if (updateUser.matchedCount === 1) {
            return res.json({ msg: `User Updated Successfully` });
        }
        else {
            return res.status(404).json({ msg: `Failed to find user with _id = ${_id} to update` });
        }
    } catch (err) {
        return res.status(500).json({ msg: `Failed to update user with _id = ${_id}` });
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleteUser = await User.deleteOne({ _id: id });
        if (deleteUser.deletedCount === 1) {
            return res.json({ msg: `User Deleted Successfully` });
        }
        else {
            return res.status(404).json({ msg: `Failed to find user with _id = ${id} to delete` });
        }

    } catch (err) {
        return res.status(500).json({ msg: `Failed to delete user with _id = ${id}` });
    }
})

module.exports = router;
