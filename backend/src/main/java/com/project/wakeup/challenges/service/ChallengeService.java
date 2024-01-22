package com.project.wakeup.challenges.service;

import com.project.wakeup.challenges.domain.repository.ChallengeRepository;
import com.project.wakeup.challenges.dto.request.SaveChallengeRequest;
import com.project.wakeup.challenges.dto.response.SaveChallengeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ChallengeService {

    private final ChallengeRepository challengeRepository;

    public SaveChallengeResponse saveDailyChallenge(SaveChallengeRequest request) {
        return null;
    }
}
