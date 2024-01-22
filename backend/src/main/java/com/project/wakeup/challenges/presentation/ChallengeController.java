package com.project.wakeup.challenges.presentation;

import com.project.wakeup.challenges.dto.request.SaveChallengeRequest;
import com.project.wakeup.challenges.dto.response.SaveChallengeResponse;
import com.project.wakeup.challenges.service.ChallengeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/challenge")
public class ChallengeController {

    private final ChallengeService challengeService;

    @PostMapping("/today")
    public ResponseEntity<SaveChallengeResponse> saveTodayChallenge(
            @RequestBody @Valid SaveChallengeRequest request
    ) {
        final SaveChallengeResponse response = challengeService.saveDailyChallenge(request);
        return ResponseEntity.ok().body(response);
    }

}
