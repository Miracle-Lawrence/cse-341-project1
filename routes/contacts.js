const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contacts");

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Get all contacts'
 * #swagger.description = 'Fetches and returns a list of all contacts stored in the database.'
 */
router.get("/", getAllContacts);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Get contact by ID'
 * #swagger.description = 'Fetches a single contact using its unique ID. Returns the contact details if found.'
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   description: 'Unique ID of the contact to retrieve',
 *   required: true,
 *   type: 'string'
 * }
 * #swagger.responses[200] = {
 *   description: 'Contact found and returned successfully'
 * }
 * #swagger.responses[404] = {
 *   description: 'Contact not found in database'
 * }
 */
router.get("/:id", getSingleContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Create a new contact'
 * #swagger.description = 'Creates a new contact in the database. All required fields must be provided in the request body.'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   description: 'Contact object containing all required fields',
 *   schema: {
 *     firstName: "John",
 *     lastName: "Doe",
 *     email: "john@example.com",
 *     favoriteColor: "Blue",
 *     birthday: "2000-01-01"
 *   }
 * }
 * #swagger.responses[201] = {
 *   description: 'Contact successfully created and ID returned'
 * }
 * #swagger.responses[400] = {
 *   description: 'Missing required fields'
 * }
 */
router.post("/", createContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Update an existing contact'
 * #swagger.description = 'Updates all fields of an existing contact using its ID. The contact must exist before updating.'
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   description: 'ID of the contact to update',
 *   required: true,
 *   type: 'string'
 * }
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   description: 'Updated contact data (all fields required)',
 *   schema: {
 *     firstName: "Updated",
 *     lastName: "User",
 *     email: "updated@example.com",
 *     favoriteColor: "Red",
 *     birthday: "2001-05-05"
 *   }
 * }
 * #swagger.responses[204] = {
 *   description: 'Contact updated successfully (no content returned)'
 * }
 * #swagger.responses[404] = {
 *   description: 'Contact not found'
 * }
 */
router.put("/:id", updateContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Delete a contact'
 * #swagger.description = 'Permanently deletes a contact from the database using its ID.'
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   description: 'ID of the contact to delete',
 *   required: true,
 *   type: 'string'
 * }
 * #swagger.responses[200] = {
 *   description: 'Contact successfully deleted'
 * }
 * #swagger.responses[404] = {
 *   description: 'Contact not found'
 * }
 */
router.delete("/:id", deleteContact);

module.exports = router;
