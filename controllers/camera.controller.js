const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Create a new post
exports.createcamera = async (req, res) => {
  const { title, content, authorId } = req.body; // Include authorId
  const result = await prisma.posts.create({
    data: {
      title: title,
      content: content,
      authorId: authorId, // Associate w
    },
  });
  res.json(result);
};

// Get all posts
exports.getcamera = async (req, res) => {
  const camera = await prisma.camera.findMany({
    include: { author: true }, // Include author details
  });
  res.json(camera);
};

// Get a single post by ID
exports.getcameraId = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.camera.findUnique({
    where: { id: id },
    include: { author: true }, // Include author details
  });
  res.json(camera);
};


exports.getcameraIp = async (req, res) => {
    const { id } = req.params;
    const camera = await prisma.camera.findUnique({
      where: { id: id },
      include: { author: true }, // Include author details
    });
    res.json(camera);
  };
  
  exports.updatecamera = async (req, res) => {
    const { id } = req.params;
    const { camera_id, name, location } = req.body;
    const result = await prisma.camera.update({
      where: { id: id },
      data: {
        camera_id: camera_id,
        name: name,
        location: location,
      },
    });
    res.json(result);
  };
  
