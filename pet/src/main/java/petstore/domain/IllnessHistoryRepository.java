package petstore.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import petstore.domain.*;

@RepositoryRestResource(
    collectionResourceRel = "illnesshistories",
    path = "illnesshistories"
)
public interface IllnessHistoryRepository
    extends PagingAndSortingRepository<IllnessHistory, Long> {}
