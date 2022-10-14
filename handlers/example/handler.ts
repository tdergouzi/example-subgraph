import { TransferSingle } from '../../generated/Example/IAssetContractShared'
import { ExampleEntity } from '../../generated/schema'
import { Address, BigInt } from '@graphprotocol/graph-ts'

export function handleTransferSingle(event: TransferSingle): void {
    if (event.params.from.notEqual(event.params.to)) return
    updateEntity(event.params.from, event.block.number, event.block.timestamp)
    return
}

function updateEntity(user: Address, blockNumber: BigInt, timestamp: BigInt): void {
    let entity = ExampleEntity.load(user.toHex())
    if (entity == null) {
        entity = new ExampleEntity(user.toHex())
        entity.blockNumber = blockNumber
        entity.timestamp = timestamp
        entity.interactedTimes = BigInt.fromI32(1)
        entity.save()
        return
    }
    entity.blockNumber = blockNumber
    entity.timestamp = timestamp
    entity.interactedTimes = entity.interactedTimes.plus(BigInt.fromI32(1))
    entity.save()
    return
} 