import { ICreateSpecificationDTO, ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRespository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {

    const specificationAlreadyExists = this.specificationsRespository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!")
    }

    this.specificationsRespository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationService }