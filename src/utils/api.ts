import axios from 'axios';

export const HTTP = axios.create();

interface IDefaultEndpoints {
  [key: string]: (...args: any[]) => Promise<any>;
}

interface IEndpoints {
  [key: string]: IDefaultEndpoints;
}

interface IEntity {
  name: string;
}

interface IConstructor {
  url: string;
}

class EntityAPI {
  private readonly url: string;
  public endpoints: IEndpoints;
  constructor({ url }: IConstructor) {
    this.url = url;
    this.endpoints = {};
  }

  public createEntity(entity: IEntity) {
    this.endpoints[entity.name] = this.createDefaultEndpoints(entity);
    Object.assign(this.endpoints, this.setOtherEndpoints());
  }

  private createDefaultEndpoints(entity: IEntity) {
    const endpoints: IDefaultEndpoints = {};
    const resourceUrl = `${this.url}/${entity.name}`;

    endpoints.getAll = (params: any = {}) => HTTP.get(resourceUrl, { params });

    endpoints.getOne = (id: string, params?: any) =>
      HTTP.get(`${resourceUrl}/${id}.json`, { params });

    endpoints.create = (entityToCreate: any) =>
      HTTP.post(resourceUrl, entityToCreate);

    endpoints.update = (id: string, entityToUpdate: any) =>
      HTTP.put(`${resourceUrl}/${id}`, entityToUpdate);

    endpoints.delete = (id: string) => HTTP.delete(`${resourceUrl}/${id}`);

    return endpoints;
  }

  private getResourceUrl(entityName: string): string {
    return `${this.url}/${entityName}`;
  }

  // TODO: Rewrite this to be.. well... better
  private setOtherEndpoints() {
    return {
      TOP_STORIES: {
        GET_ALL: () => HTTP.get(`${this.getResourceUrl('topstories.json')}`),
      },
      NEWS_STORIES: {
        GET_ALL: () => HTTP.get(`${this.getResourceUrl('beststories.json')}`),
      },
      NEW_STORIES: {
        GET_ALL: () => HTTP.get(`${this.getResourceUrl('newstories.json')}`),
      },
      SHOW_STORIES: {
        GET_ALL: () => HTTP.get(`${this.getResourceUrl('showstories.json')}`),
      },
      JOB_STORIES: {
        GET_ALL: () => HTTP.get(`${this.getResourceUrl('jobstories.json')}`),
      },
      ASK_STORIES: {
        GET_ALL: () => HTTP.get(`${this.getResourceUrl('askstories.json')}`),
      }
    };
  }
}

export const CRUDApi = new EntityAPI({ url: 'https://hacker-news.firebaseio.com/v0' });
