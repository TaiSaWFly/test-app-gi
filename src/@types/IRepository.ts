/**
 * IRepository - represents the basic type of entity model "Repository"
 * @interface
 */

export interface IRepository {
  id: string;
  name: string;
  licenseInfo?: LicenseInfo | null;
  stargazerCount: number;
  forkCount: number;
  description: string;
  updatedAt: string;
  createdAt: string;
  languages: Languages;
}

/**
 * LicenseInfo - represents a child type of an entity model for "Repository"
 * @interface
 */

export interface LicenseInfo {
  id: string;
  name: string;
}

/**
 * Languages - represents a child type of an entity model for "Repository"
 * @interface
 */

export interface Languages {
  totalSize: number;
  edges: Edge[];
}

/**
 * Edge - represents a child type of an entity model for "Repository"
 * @interface
 */

export interface Edge {
  size: number;
  node: Node;
}

/**
 * Node - represents a child type of an entity model for "Repository"
 * @interface
 */

export interface Node {
  name: string;
  id: string;
}
