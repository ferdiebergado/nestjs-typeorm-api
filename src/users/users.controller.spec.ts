import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

describe("UsersController", () => {
  let controller: UsersController;

  const mockUserService = {
    create: jest.fn((dto) => {
      return {
        id: "1",
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should create a user", () => {
    const createUserDto = {
      name: "procopio sinagtala",
      email: "abc@example.com",
      password: "8888",
    };

    expect(controller.create(createUserDto)).toEqual({
      id: expect.any(String),
      ...createUserDto,
    });

    expect(mockUserService.create).toHaveBeenCalled();
  });
});
