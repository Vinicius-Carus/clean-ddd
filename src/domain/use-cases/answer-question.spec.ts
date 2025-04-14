import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { create } from "domain";
import { Answer } from "../entities/answer";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

const fakeAnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    content: "Answer content",
    instructorId: "1",
    questionId: "1",
  });

  expect(answer.content).toEqual("Answer content");
});
