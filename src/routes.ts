import { Request, Response } from 'express';

import PersonService from './PersonService';

export function createPerson(request, response) {
  const { name, doc, birthDate } = request.body;
  return response.json({ name, doc, birthDate });
}

// post /person/ create person
// get /person/{id} return animal person(ID)

// post /animal/ create animal

//
