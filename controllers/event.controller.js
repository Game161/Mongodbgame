const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new post
exports.createevent = async (req, res) => {
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
exports.getevent = async (req, res) => {
  const event = await prisma.event.findMany({
    include: { author: true }, // Include author details
  });
  res.json(event);
};

// Get a single post by ID
exports.geteventId = async (req, res) => {
  const { id } = req.params;
  const event = await prisma.event.findUnique({
    where: { id: id },
    include: { author: true }, // Include author details
  });
  res.json(event);
};

exports.updateevent = async (req, res) => {
  const { id } = req.params;
  const { camera_id,amount } = req.body;
  const result = await prisma.event.update({
    where: { id: id },
    data: {
      camera_id: camera_id,
      amount: amount,
      
    },
  });
  res.json(result);
};


