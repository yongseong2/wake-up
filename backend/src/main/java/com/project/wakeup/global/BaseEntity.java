package com.project.wakeup.global;

import static com.project.wakeup.global.type.StatusType.DELETED;
import static com.project.wakeup.global.type.StatusType.USABLE;
import static jakarta.persistence.EnumType.STRING;

import com.project.wakeup.global.type.StatusType;
import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Enumerated;
import jakarta.persistence.MappedSuperclass;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@MappedSuperclass
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime modifiedAt;

    @Column(nullable = false)
    @Enumerated(value = STRING)
    private StatusType status = USABLE;

    protected BaseEntity(final StatusType status) {
        this.status = status;
    }

    public boolean isDeleted() {
        return this.status.equals(DELETED);
    }

    public void changeStatusToDeleted() {
        this.status = DELETED;
    }
}
