package petstore.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import petstore.domain.*;

@RepositoryRestResource(collectionResourceRel = "addresses", path = "addresses")
public interface AddressRepository
    extends PagingAndSortingRepository<Address, Long> {}
