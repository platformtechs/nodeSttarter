import {Router} from 'express'
import * as groupController from './controller'

const routes = new Router()

routes.post('/groups/new', groupController.createGroup);
routes.post('/groups/:groupId/meetups/new', groupController.createGroupMeetup)

export default routes