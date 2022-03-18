interface IRequest {
  car_id: string;
  image_name: string;
}

class UploadCarImageUseCase {
  async execute(data: IRequest) {}
}

export { UploadCarImageUseCase };
