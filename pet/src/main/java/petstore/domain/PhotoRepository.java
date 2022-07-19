package petstore.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import petstore.domain.*;

@RepositoryRestResource(collectionResourceRel = "photos", path = "photos")
public interface PhotoRepository
    extends PagingAndSortingRepository<Photo, Long> {}
