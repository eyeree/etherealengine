import { UserId } from '@etherealengine/common/src/interfaces/UserId'

import { Engine } from '../../src/ecs/classes/Engine'
import { Network, NetworkTopics } from '../../src/networking/classes/Network'

export const createMockNetwork = (networkType = NetworkTopics.world) => {
  if (networkType === NetworkTopics.world) Engine.instance.hostIds.world.set(networkType as any as UserId)
  else Engine.instance.hostIds.media.set(networkType as any as UserId)
  Engine.instance.networks.set(networkType, new Network(networkType as any as UserId, networkType))
}
