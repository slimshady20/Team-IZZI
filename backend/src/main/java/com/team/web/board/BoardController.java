package com.team.web.board;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/boards")
public class BoardController {
}
