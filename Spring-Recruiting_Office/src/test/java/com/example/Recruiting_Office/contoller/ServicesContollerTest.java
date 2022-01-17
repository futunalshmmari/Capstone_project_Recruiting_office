package com.example.Recruiting_Office.contoller;

import com.example.Recruiting_Office.model.Entities.Contractor;
import com.example.Recruiting_Office.model.Entities.Feedback;
import com.example.Recruiting_Office.model.Entities.Services;
import com.example.Recruiting_Office.model.Entities.User;
import com.example.Recruiting_Office.model.Service.ServicesService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class ServicesContollerTest {
    @Mock
    ServicesService servicesService;
    @InjectMocks
    ServicesContoller servicesContoller;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetServicess() {
        when(servicesService.getServicess()).thenReturn(Arrays.<Services>asList(new Services(0, "category", "description", "img", "link", new User(0, "name", "password", "email", "city", 0, Arrays.<Feedback>asList(new Feedback("subject", "description", null, null)), Arrays.<Services>asList(null)), new Contractor(0, "name", 0, "address", "nationality", "category", Arrays.<Services>asList(null)), new Feedback("subject", "description", new User(0, "name", "password", "email", "city", 0, Arrays.<Feedback>asList(null), Arrays.<Services>asList(null)), null))));

        List<Services> result = servicesContoller.getServicess();
        Assertions.assertEquals(Arrays.<Services>asList(new Services(0, "category", "description", "img", "link", new User(0, "name", "password", "email", "city", 0, Arrays.<Feedback>asList(new Feedback("subject", "description", null, null)), Arrays.<Services>asList(null)), new Contractor(0, "name", 0, "address", "nationality", "category", Arrays.<Services>asList(null)), new Feedback("subject", "description", new User(0, "name", "password", "email", "city", 0, Arrays.<Feedback>asList(null), Arrays.<Services>asList(null)), null))), result);
    }

    @Test
    void testGetServicess2() {
        when(servicesService.getServices(anyInt())).thenReturn(null);

        Optional<Services> result = servicesContoller.getServicess(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewServices() {
        servicesContoller.registerNewServices(new Services(0, "category", "description", "img", "link", new User(0, "name", "password", "email", "city", 0, Arrays.<Feedback>asList(new Feedback("subject", "description", null, null)), Arrays.<Services>asList(null)), new Contractor(0, "name", 0, "address", "nationality", "category", Arrays.<Services>asList(null)), new Feedback("subject", "description", new User(0, "name", "password", "email", "city", 0, Arrays.<Feedback>asList(null), Arrays.<Services>asList(null)), null)));
    }

    @Test
    void testDeleteServices() {
        servicesContoller.deleteServices(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme