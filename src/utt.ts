import { BigInt } from "@graphprotocol/graph-ts"
import {
  UTT,
  AddConnection,
  Approval,
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  Endorse,
  OwnershipTransferred,
  Paused,
  RemoveConnection,
  RewardPreviousEndorserLevel1,
  RewardPreviousEndorserLevel2,
  Transfer,
  Unpaused
} from "../generated/UTT/UTT"
import { ExampleEntity } from "../generated/schema"

export function handleAddConnection(event: AddConnection): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._user = event.params._user
  entity._connectedTypeId = event.params._connectedTypeId

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.D_lvl1(...)
  // - contract.D_lvl2(...)
  // - contract.D_n(...)
  // - contract.D_o(...)
  // - contract.O_n(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.increaseAllowance(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.previousEndorserStakes(...)
  // - contract.socialConnectionReward(...)
  // - contract.stringToBytes32(...)
  // - contract.symbol(...)
  // - contract.totalStake(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
}

export function handleApproval(event: Approval): void {}

export function handleChainlinkCancelled(event: ChainlinkCancelled): void {}

export function handleChainlinkFulfilled(event: ChainlinkFulfilled): void {}

export function handleChainlinkRequested(event: ChainlinkRequested): void {}

export function handleEndorse(event: Endorse): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleRemoveConnection(event: RemoveConnection): void {}

export function handleRewardPreviousEndorserLevel1(
  event: RewardPreviousEndorserLevel1
): void {}

export function handleRewardPreviousEndorserLevel2(
  event: RewardPreviousEndorserLevel2
): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}
