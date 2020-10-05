package com.team.web.file;
import com.team.web.common.JpaService;
import com.team.web.common.Path;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

interface FileService extends JpaService<File> {

    void save(File saveFile);

    List<File> findBySubjectId(Long subjectId);

    List<String>  getFileName(Long orderId);

    List<String> getOnlyFileName(Long orderId);
}
@Service
public class FileServiceImpl implements FileService{
    private final FileRepository fileRepository;

    public FileServiceImpl(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    @Override
    public Optional<File> findById(String id) {
        return fileRepository.findById(Long.valueOf(id));
    }

    @Override
    public Iterable<File> findAll() {
        return fileRepository.findAll();
    }

    @Override
    public int count() {
        return (int) fileRepository.count();
    }

    @Override
    public void delete(String id) {
        fileRepository.delete(findById(id).orElse(new File()));
    }

    @Override
    public boolean exists(String id) {
        return fileRepository.existsById(Long.valueOf(id));
    }

    @Override
    public void save(File saveFile) {
        fileRepository.save(saveFile);
    }

    @Override
    public List<File> findBySubjectId(Long subjectId) {
        System.out.println(fileRepository.findBySubjectId(subjectId));
        return fileRepository.findBySubjectId(subjectId);
    }

    @Override
    public List<String>   getFileName(Long orderId) {

return null;
    }

    @Override
    public List<String> getOnlyFileName(Long orderId) {
        return fileRepository.getFileName(orderId);
    }


}