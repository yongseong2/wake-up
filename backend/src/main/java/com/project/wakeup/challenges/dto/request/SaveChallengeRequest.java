package com.project.wakeup.challenges.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SaveChallengeRequest {

    @NotNull
    private LocalDateTime time;

    @NotBlank
    private String memberName; // id로 변경 필요
}
