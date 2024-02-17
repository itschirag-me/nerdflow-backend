import { UnprocessableEntityException } from '@nestjs/common';
import {
  DeepPartial,
  DeleteResult,
  EntityManager,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  RemoveOptions,
  Repository,
  SaveOptions,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseRepository<E, R extends Repository<E>> {
  constructor(
    protected readonly repository: R,
    protected readonly entityManager?: EntityManager,
  ) {}

  /**
   * ********************* Find methods ************************
   */
  find(criteria: FindManyOptions<E>): Promise<E[]> {
    return this._find(criteria);
  }

  findAll(): Promise<E[]> {
    return this._findAll();
  }

  findOne(criteria: FindOneOptions<E>): Promise<E> {
    return this._findOne(criteria);
  }

  findAndCount(criteria: FindManyOptions<E>): Promise<[E[], number]> {
    return this._findAndCount(criteria);
  }

  private _find(criteria: FindManyOptions<E>): Promise<E[]> {
    try {
      return this.repository.find(criteria);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  private _findAll() {
    try {
      return this.repository.find();
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  private _findOne(criteria: FindOneOptions<E>): Promise<E> {
    try {
      return this.repository.findOne(criteria);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  private _findAndCount(criteria: FindOneOptions<E>): Promise<[E[], number]> {
    try {
      return this.repository.findAndCount(criteria);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  /**
   * ********************* Save methods ************************
   */
  create(dto: DeepPartial<E>): E {
    return this._create(dto);
  }
  saveOne(dto: DeepPartial<E>): Promise<E> {
    return this._saveOne(dto);
  }

  saveMany(dtos: DeepPartial<E[]>): Promise<E[]> {
    return this._saveMany(dtos);
  }

  private _create(dto: DeepPartial<E>): E {
    return this.repository.create(dto);
  }

  private _saveOne(dto: DeepPartial<E>) {
    try {
      return this.repository.save(dto);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  private _saveMany(dtos: DeepPartial<E[]>) {
    try {
      return this.repository.save(dtos);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  /**
   * ******************** Update methods **********************
   */

  update(
    criteria: FindOptionsWhere<E>,
    updateDto: QueryDeepPartialEntity<E>,
  ): Promise<UpdateResult> {
    return this._update(criteria, updateDto);
  }

  private _update(
    criteria: FindOptionsWhere<E>,
    updateDto: QueryDeepPartialEntity<E>,
  ): Promise<UpdateResult> {
    try {
      return this.repository.update(criteria, updateDto);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  /**
   * ******************** Delete/Remove methods **********************
   */

  softDelete(criteria: FindOptionsWhere<E>): Promise<UpdateResult> {
    return this._softDelete(criteria);
  }

  delete(criteria: FindOptionsWhere<E>): Promise<DeleteResult> {
    return this._delete(criteria);
  }

  softRemove(entities: E[], removeOptions: RemoveOptions): Promise<E[]> {
    return this._softRemove(entities, removeOptions);
  }

  remove(entities: E[], removeOptions: RemoveOptions): Promise<E[]> {
    return this._remove(entities, removeOptions);
  }

  private _softDelete(criteria: FindOptionsWhere<E>): Promise<UpdateResult> {
    try {
      return this.repository.softDelete(criteria);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  private _delete(criteria: FindOptionsWhere<E>): Promise<DeleteResult> {
    try {
      return this.repository.delete(criteria);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  private _softRemove(entities: E[], options: SaveOptions): Promise<E[]> {
    return this.repository.softRemove(entities, options);
  }

  private _remove(entities: E[], removeOptions: RemoveOptions): Promise<E[]> {
    try {
      return this.repository.remove(entities, removeOptions);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  /**
   * ******************** Other methods ************************
   */

  count(criteria): Promise<number> {
    return this._count(criteria);
  }

  exists(criteria: FindManyOptions<E>): Promise<boolean> {
    return this._exists(criteria);
  }

  private _exists(criteria: FindManyOptions<E>): Promise<boolean> {
    try {
      return this.repository.exists(criteria);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }

  private _count(criteria: FindManyOptions<E>): Promise<number> {
    try {
      return this.repository.count(criteria);
    } catch (error) {
      throw new UnprocessableEntityException(error?.message);
    }
  }
}
