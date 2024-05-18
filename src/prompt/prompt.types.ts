export interface FollowUpQuestion {
    question: string;
}
  
export interface GenerateResponse {
    response: string;
    follow_up_questions: FollowUpQuestion[];
}