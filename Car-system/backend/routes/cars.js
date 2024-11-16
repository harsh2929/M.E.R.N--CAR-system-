// backend/routes/cars.js

const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const auth = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Create Car
router.post('/', auth, upload.array('images', 10), async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const images = req.files.map((file) => file.path); // Use a cloud service in production
    const car = new Car({
      userId: req.user.id,
      title,
      description,
      tags: tags.split(','),
      images,
    });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Cars (with My Cars Filter and Pagination)
router.get('/', auth, async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;
    let query = {};

    // Parse 'myCars' parameter as boolean
    const myCars = req.query.myCars === 'true=';

    // If 'myCars' is true, filter by the user's ID
    if (myCars) {
      query.userId = req.user.id;
    }

    if (search) {
      const searchQuery = {
        $or: [
          { title:       { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { tags:        { $regex: search, $options: 'i' } },
        ],
      };
      query = { ...query, ...searchQuery };
    }

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort: { createdAt: -1 },
      populate: { path: 'userId', select: 'username' },
    };

    const result = await Car.paginate(query, options);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Car Details
router.get('/:id', auth, async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate('userId', 'username');
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Car (Only Owner)
router.put('/:id', auth, upload.array('images', 10), async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    let images = [];
    if (req.files) {
      images = req.files.map((file) => file.path);
    }
    const updateData = {
      title,
      description,
      tags: tags.split(','),
      $push: { images },
    };
    const car = await Car.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      updateData,
      { new: true }
    );
    if (!car) return res.status(404).json({ message: 'Car not found or unauthorized' });
    res.json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Car (Only Owner)
router.delete('/:id', auth, async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!car) return res.status(404).json({ message: 'Car not found or unauthorized' });
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
